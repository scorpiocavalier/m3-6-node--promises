// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise')

const baseUrl = 'https://journeyedu.herokuapp.com'
const endpoint = '/hello'

const testGreeting = () => {
  return request(baseUrl + endpoint)
    .then(res => JSON.parse(res))
    .then(parsedRes => parsedRes.data.text)
    .catch(err => console.log('Error: ', err))
}

testGreeting().then(result => console.log(result))