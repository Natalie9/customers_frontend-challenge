import {
  getFullName,
  toUpperCaseFirstLetters,
  normalizeString
} from '../stringFormatter'

describe('Should normalize string', () => {
  it('Remove accents', () => {
    const cake = normalizeString('Crème Brulée')
    expect(cake).toStrictEqual('CREME BRULEE')
  })
  it('Remove espace before word', () => {
    const word = normalizeString('  More space please  ')
    expect(word).toStrictEqual('MORE SPACE PLEASE')
  })
})
describe('Upper Case', () => {
    it('Should upper case all first letters of phrase', () => {
      const phrase = toUpperCaseFirstLetters('i need more space')
      expect(phrase).toEqual('I Need More Space')
    })
  }
)
describe('get full name', () => {
  it('Should give full name', () => {
    const
      customer = {
        name: {
          first: 'ana',
          last: 'Maria'
        }
      }
    const fullName = getFullName(customer)
    expect(fullName).toStrictEqual('Ana Maria')
  })
})
