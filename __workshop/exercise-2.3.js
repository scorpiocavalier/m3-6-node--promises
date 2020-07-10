// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise')
const baseURL = 'https://journeyedu.herokuapp.com'
const endpoint = '/hello/'

const greeting = langCode => {
  return request(baseURL + endpoint + langCode)
    .then(res => JSON.parse(res))
    .then(parsedRes => parsedRes.data)
    .catch(err => err.error ? JSON.parse(err.error) : err)
}

// Testing
greeting('fr').then((result) => console.log(result))
greeting('en').then((result) => console.log(result))
greeting('es').then((result) => console.log(result))
greeting('it').then((result) => console.log(result))
greeting('cb').then((result) => console.log(result))