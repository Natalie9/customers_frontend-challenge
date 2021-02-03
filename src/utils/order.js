const orderByName = function (customers) {
  return customers.sort(compareByName)
}

const compareByName = function (a, b) {
  if (a.name.fullName < b.name.fullName) {
    return -1
  }
  if (a.name.fullName > b.name.fullName) {
    return 1
  }
  return 0
}

module.exports = {
  orderByName
}
