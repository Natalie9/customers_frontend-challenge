import { findRegionByLocation } from 'src/utils/findRegionByLocation'

describe('Filter Customer', () => {
  it('should filter customer as Nomal', () => {
    let longitude = -34.016466
    let latitude = -54.777426
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Normal')
  })
  it('should filter customer as Especial', () => {
    let longitude = -14.411580
    let latitude = -46.361899
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Especial')
  })
  it('should filter the customer as Especial', () => {
    let longitude = -19.766959
    let latitude = -51.997614
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Especial')
  })
  it('should filter customer as Trabalhoso', () => {
    let longitude = 20.000000
    let latitude = 52.997614
    let classification = findRegionByLocation({
      latitude,
      longitude
    })
    expect(classification).toBe('Trabalhoso')
  })
})
