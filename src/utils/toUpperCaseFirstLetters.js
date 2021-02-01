const toUpperCaseFirstLetters = (phrase = '') => {
  console.log({ phrase })
  return phrase.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}
module.exports = toUpperCaseFirstLetters
