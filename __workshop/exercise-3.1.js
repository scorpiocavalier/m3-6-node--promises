// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise')

// Returns the current position of the ISS
const getIssPosition = () => {

  const baseUrl = 'http://api.open-notify.org/iss-now.json'
  
  return (
    request(baseUrl)
      .then(res => JSON.parse(res))
      .then(parsedRes => ({ latitude:lat, longitude:lng } = parsedRes.iss_position))
      .catch(err => console.log('Error:', err))
  )
}

getIssPosition().then((lat, lng) => console.log(lat, lng))