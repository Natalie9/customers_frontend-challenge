import { orderByName } from '../order'

let customers = [
  {
    gender: 'female',
    name: {
      first: 'mônica',
      last: 'rodrigues',
      fullName: 'mônica rodrigues'
    },
    region: 'Especial'
  },
  {
    gender: 'male',
    name: {
      first: 'armando',
      last: 'da cruz',
      fullName: 'armando da cruz'
    },
    region: 'Normal'
  },
  {
    gender: 'female',
    name: {
      first: 'alda',
      last: 'barbosa',
      fullName: 'alda barbosa'
    },
    region: 'Normal'
  },
  {
    gender: 'female',
    name: {
      first: 'beatriz',
      last: 'barbosa',
      fullName: 'beatriz barbosa'
    },
    region: 'Especial'
  }
]

const customersOrdered = [

  {
    gender: 'female',
    name: {
      first: 'alda',
      last: 'barbosa',
      fullName: 'alda barbosa'
    },
    region: 'Normal'
  },
  {
    gender: 'male',
    name: {
      first: 'armando',
      last: 'da cruz',
      fullName: 'armando da cruz'
    },
    region: 'Normal'
  },
  {
    gender: 'female',
    name: {
      first: 'beatriz',
      last: 'barbosa',
      fullName: 'beatriz barbosa'
    },
    region: 'Especial'
  }, {
    gender: 'female',
    name: {
      first: 'mônica',
      last: 'rodrigues',
      fullName: 'mônica rodrigues'
    },
    region: 'Especial'
  }
]
describe('Ordenação', () => {
  it('deve ordenar pelo nome do cliente', () => {
    const ordered = orderByName(customers)
    expect(ordered).toEqual(customersOrdered)
  })
})
