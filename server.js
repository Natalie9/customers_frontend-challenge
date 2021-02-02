const {
  findRegionByLocation,
  getFullName,
  orderByName,
  filter
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

        return customer
      })
    orderByName(dataFromServer)
  }
}

app.get('/api/customers', async (req, res) => {
  await fetchDataFromApi()

  let data = [...dataFromServer]

  data = filter(JSON.parse(req.query.filters), data)
  const limit = req.query.limit || data.length
  const total = data.length
  const page = req.query.page || 1

  const offset = (page - 1) * limit

  data = [...data.splice(offset, limit)]
  res.send({
    data,
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
