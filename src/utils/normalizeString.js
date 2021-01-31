const normalizeString = (str = '') => {
  return str.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

module.exports = normalizeString
