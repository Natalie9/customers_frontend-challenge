const { findRegionByLocation } = require('./src/utils/')

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
    dataFromServer = resp.data.results.map((it, index) => ({ id: index, ...it }))
    dataFromServer.map(customer => {
      const latitude = customer.location.coordinates.latitude
      const longitude = customer.location.coordinates.longitude
      let region = findRegionByLocation({
        latitude,
        longitude
      })
      customer.region = region
    })
  }
}

app.get('/api/customers', async (req, res) => {
  const {
    limit,
    page
  } = req.query
  await fetchDataFromApi()
  res.send({
    data: dataFromServer,
    total: dataFromServer.length
  })
})

app.get('/api/customers/:id', async (req, res) => {
  await fetchDataFromApi()
  const id = Number(req.params.id)
  // validar id

  const customer = dataFromServer.find(ct => ct.id === id)
  res.send(customer)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
