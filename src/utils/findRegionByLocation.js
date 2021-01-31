module.exports = function findRegionByLocation ({
  latitude,
  longitude
}) {
  const special1 = {
    minlon: -15.411580,
    minlat: -46.361899,
    maxlon: -2.196998,
    maxlat: -34.276938
  }
  const special2 = {
    minlon: -20.000000,
    minlat: -52.997614,
    maxlon: -19.766959,
    maxlat: -44.428305
  }
  const normal = {
    minlon: -34.016466,
    minlat: -54.777426,
    maxlon: -26.155681,
    maxlat: -46.603598
  }

  if (normal.minlon <= longitude && normal.maxlon >= longitude) {
    if (normal.minlat <= latitude && normal.maxlat >= latitude) {
      return 'normal'
    }
  }
  if (special2.minlon <= longitude && special2.maxlon >= longitude) {
    if (special2.minlat <= latitude && special2.maxlat >= latitude) {
      return 'especial'
    }
  }
  if (special1.minlon <= longitude && special1.maxlon >= longitude) {
    if (special1.minlat <= latitude && special1.maxlat >= latitude) {
      return 'especial'
    }
  }
  return 'trabalhoso'
}
