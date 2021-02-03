import { findRegionByLocation } from './../findRegionByLocation'

describe('Classificação das regiões pela localização', () => {
  it('deve classificar como Normal', () => {
    let longitude = -34.016466
    let latitude = -54.777426
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Normal')
  })
  it('deve classificar como Especial', () => {
    let longitude = -14.411580
    let latitude = -46.361899
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Especial')
  })
  it('deve classificar como Especial', () => {
    let longitude = -19.766959
    let latitude = -51.997614
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Especial')
  })
  it('deve classificar como Trabalhoso', () => {
    let longitude = 20.000000
    let latitude = 52.997614
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Trabalhoso')
  })
})
