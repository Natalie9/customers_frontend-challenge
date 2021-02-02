const toUpperCaseFirstLetters = require('./toUpperCaseFirstLetters')

const getFullName = function (customer) {
  const first = toUpperCaseFirstLetters(customer.name.first)
  const last = toUpperCaseFirstLetters(customer.name.last)
  return (`${first} ${last}`)
}

const orderByName = function (customers) {
  customers.sort(compare)
}

const compare = function (a, b) {
  if (a.name.fullName < b.name.fullName) {
    return -1
  }
  if (a.name.fullName > b.name.fullName) {
    return 1
  }
  return 0
}

module.exports = {
  getFullName,
  orderByName,
  compare
}
