const { findRegionByLocation } = require('./findRegionByLocation')

const {
  toUpperCaseFirstLetters,
  normalizeString,
  getFullName
} = require('./stringFormatter')
const {
  searchByCustomerName,
  filterByRegion,
  filter
} = require('./filters')

const {
  orderByName
} = require('./order')

module.exports = {
  findRegionByLocation,
  normalizeString,
  toUpperCaseFirstLetters,
  searchByCustomerName,
  filterByRegion,
  filter,
  getFullName,
  orderByName
}
