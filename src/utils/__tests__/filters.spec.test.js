import {
  searchByCustomerName,
  filterByRegion,
  filter
} from '../filters'

const customers = [
  {
    gender: 'female',
    name: {
      first: 'mônica',
      last: 'rodrigues'
    },
    region: 'Especial'
  },
  {
    gender: 'male',
    name: {
      first: 'armando',
      last: 'da cruz'
    },
    region: 'Normal'
  },
  {
    gender: 'female',
    name: {
      first: 'alda',
      last: 'barbosa'
    },
    region: 'Normal'
  },
  {
    gender: 'female',
    name: {
      first: 'beatriz',
      last: 'barbosa'
    },
    region: 'Especial'
  }
]
describe('Busca por nome', () => {
  it('Deve encontar cliente pelo nome de armando', () => {
    let foundCustomers = searchByCustomerName({
      name: 'armando',
      customers
    })
    expect(foundCustomers).toEqual([{
      gender: 'male',
      name: {
        first: 'armando',
        last: 'da cruz'
      },
      region: 'Normal'
    }])
  })
  it('Deve encontrar 2 clientes com o sobrenome barbosa', () => {
    let foundCustomers = searchByCustomerName({
      name: 'barbosa',
      customers
    })
    expect(foundCustomers).toHaveLength(2)
  })
  it('Deve encontrar cliente "mônica" ao ser buscado "Monica"', () => {
    let foundCustomers = searchByCustomerName({
      name: 'Monica',
      customers
    })
    expect(foundCustomers[0].name.first).toEqual('mônica')
  })
})
describe('Filtros por região', () => {
  it('Deve encontrar 2 clientes classificados como "Especial" ', () => {
    let foundCustomers = filterByRegion({
      regionSelected: ['Especial'],
      customers: customers
    })
    expect(foundCustomers).toHaveLength(2)
  })
  it('Deve encontrar todos os clientes ao filtrar por todas as regiões ', () => {
    let foundCustomers = filterByRegion({
      regionSelected: ['Especial', 'Trabalhoso', 'Normal'],
      customers: customers
    })
    let totalCustomers = Array.from(customers).length
    expect(foundCustomers).toHaveLength(totalCustomers)
  })
  it('Não Deve encontrar clientes classificados como "Trabalhoso"', () => {
    let foundCustomers = filterByRegion({
      regionSelected: ['Trabalhoso'],
      customers: customers
    })
    expect(foundCustomers).toHaveLength(0)
  })
  it('Deve encontrar todos os clientes ao não passar nenhum filtro', () => {
    let foundCustomers = filterByRegion({ customers })
    expect(foundCustomers).toEqual(customers)
  })
})

