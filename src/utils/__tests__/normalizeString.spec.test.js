import { normalizeString } from '../normalizeString'

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
