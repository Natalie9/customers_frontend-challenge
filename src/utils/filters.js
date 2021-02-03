const { normalizeString } = require('./stringFormatter')

const searchByCustomerName = ({
  name,
  customers
}) => {
  name = name || ''
  customers = customers || []
  if (name.length) {
    return customers.filter(ct => {
      let nameCustomer = normalizeString(ct.name.first + ' ' + ct.name.last)
      name = normalizeString(name)
      return nameCustomer.includes(name)
    })
  } else {
    return customers
  }
}

const filterByRegion = ({
  regionSelected,
  customers
}) => {
  regionSelected = regionSelected || []
  customers = customers || []
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
    data = filterByRegion({
      regionSelected: filters.region,
      customers: data
    })
  }
  if (filters.name) {
    data = searchByCustomerName({
      name: filters.name,
      customers: data
    })
  }
  return data
}
module.exports = {
  searchByCustomerName,
  filterByRegion,
  filter
}
