const normalizeString = require('./normalizeString')
const searchByCustomerName = (text, customers) => {
  if (text.length) {
    return customers.filter(ct => {
      let name = normalizeString(ct.name.first + ' ' + ct.name.last)
      text = normalizeString(text)
      return name.includes(text)
    })
  } else {
    return customers
  }
}

const filterByRegion = (regionSelected, customers) => {
  if (regionSelected.length) {
    return customers.filter(ct => {
      return regionSelected.includes(ct.region)
    })
  } else {
    return customers
  }
}

const filter = function (filters, data) {
  if (filters.region.length) {
    data = filterByRegion(filters.region, data)
  }
  if (filters.name) {
    data = searchByCustomerName(filters.name, data)
  }
  return data
}
module.exports = {
  searchByCustomerName,
  filterByRegion,
  filter
}
