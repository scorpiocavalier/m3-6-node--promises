// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client')
require('dotenv').config({ path: '../.env' })

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat}, ${lng}`
  }

  return opencage
    .geocode(requestObj)
    .then(data => {
      if(data.status.code == 200 && data.results.length > 0) {
        let place = data.results[0]
        return place.formatted
      }
    })
}

const addresses = [
  { lat: '48.858262', lng: '2.294496'   },
  { lat: '45.476902', lng: '-73.446593' },
  { lat: '45.497118', lng: '-73.579044' },
  { lat: '45.477842', lng: '-73.476252' }
]

addresses.forEach(address => {
  const { lat, lng } = address
  getAddressFromPosition(lat, lng)
    .then(address => console.log(address))
    .catch(error => console.log(error))
})