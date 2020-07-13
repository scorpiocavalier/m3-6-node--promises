// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise')

// Returns the current position of the ISS
const getIssPosition = () => {

  const baseUrl = 'http://api.open-notify.org/iss-now.json'
  
  return request(baseUrl)
    .then(data => JSON.parse(data))
    .then(parsedData => {
      let { longitude, latitude } = parsedData.iss_position
      return { lat: Number(latitude), lng: Number(longitude) }
    })
    .catch('Something went wrong with request-promise call.')
}

// getIssPosition()
//   .then(position => console.log('3.1', position))
//   .catch(error => console.log(error))

module.exports = { getIssPosition }