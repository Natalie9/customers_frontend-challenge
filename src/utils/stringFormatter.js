const getFullName = function (customer) {
  const first = toUpperCaseFirstLetters(customer.name.first)
  const last = toUpperCaseFirstLetters(customer.name.last)
  return (`${first} ${last}`)
}

const toUpperCaseFirstLetters = (phrase = '') => {
  return phrase.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}

const normalizeString = (str = '') => {
  return str.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = {
  getFullName,
  toUpperCaseFirstLetters,
  normalizeString
}
