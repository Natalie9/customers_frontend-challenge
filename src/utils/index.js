const findRegionByLocation = require('./findRegionByLocation')
const toUpperCaseFirstLetters = require('./toUpperCaseFirstLetters')
const normalizeString = require('./normalizeString')
const {
  searchByCustomerName,
  filterByRegion,
  filter
} = require('./filters')

const {
  getFullName,
  orderByName,
  compare
} = require('./customerName')

module.exports = {
  findRegionByLocation,
  normalizeString,
  toUpperCaseFirstLetters,
  searchByCustomerName,
  filterByRegion,
  filter,
  getFullName,
  orderByName,
  compare
}
