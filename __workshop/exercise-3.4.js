// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getIssPosition } = require('./exercise-3.1')
const { getPositionFromAddress } = require('./exercise-3.2')

const addresses = [
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8',
  '5455 Grande-Allee Brossard, QC J4Z 3H1',
  '2035A Rue Victoria, Brossard, QC J4S 1H1'
]

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.floor(Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + 
      Math.pow(pos1.lng - pos2.lng, 2)
    ))
}

const getDistanceFromIss = address => {
  return getPositionFromAddress(address)
    .then(pos1 => getIssPosition()
      .then(pos2 => getDistance(pos1, pos2))
    )
}

addresses.forEach(address => {
  getDistanceFromIss(address)
    .then(distance => console.log(`Distance between ISS and ${address} is ${distance} km`))
    .catch(error => console.log(error))
})