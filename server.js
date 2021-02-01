const {
  findRegionByLocation,
  toUpperCaseFirstLetters
} = require('./src/utils/')

const express = require('express')
const axios = require('axios')
const path = require('path')
const app = express()

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let dataFromServer = null

// Set static folder
app.use(express.static(path.join(__dirname, 'dist/spa')))

const fetchDataFromApi = async () => {
  if (!dataFromServer) {
    const resp = await axios.get('https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json').catch(err => {
      console.log(err)
    })

    dataFromServer = resp.data.results
      .map((customer, index) => {
        customer.id = index

        const latitude = customer.location.coordinates.latitude
        const longitude = customer.location.coordinates.longitude

        let region = findRegionByLocation({
          latitude,
          longitude
        })
        customer.region = region
        customer.name.fullName = getFullName(customer)
        customer.location.address = getStreetNumber(customer)
        customer.location.fullAddress = getFullAddress(customer)
        return customer
      })
  }
}

const getFullName = function (customer) {
  const first = toUpperCaseFirstLetters(customer.name.first)
  const last = toUpperCaseFirstLetters(customer.name.last)
  return (`${first} ${last}`)
}
const getStreetNumber = function (customer) {
  const address = customer.location.street.split(' ')
  const number = address[0]
  const street = toUpperCaseFirstLetters(address.slice(1, -1).join(' '))
  return `${street}, ${number}`
}
const getFullAddress = function (customer) {
  const city = toUpperCaseFirstLetters(customer.location.city)
  const state = toUpperCaseFirstLetters(customer.location.state)
  const cep = customer.location.postcode
  return `${city} ${state} - CEP ${cep}`
}

app.get('/api/customers', async (req, res) => {
  await fetchDataFromApi()

  const limit = req.query.limit || dataFromServer.length
  const total = dataFromServer.length
  const page = req.query.offset || 1

  const offset = (page - 1) * limit
  dataFromServer = dataFromServer.splice(offset, limit)

  res.send({
    data: dataFromServer,
    total
  })
})

app.get('/api/customers/:id', async (req, res) => {
  await fetchDataFromApi()
  try {
    const id = Number(req.params.id)
    const customer = dataFromServer.find(ct => ct.id === id)
    res.send(customer)
  } catch (e) {
    res.send(e)
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
