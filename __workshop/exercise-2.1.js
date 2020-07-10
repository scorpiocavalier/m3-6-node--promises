// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise')

const uri = 'https://journeyedu.herokuapp.com'
const url = '/hello'

const testGreeting = () => {
  return request(uri + url)
    .then(res => JSON.parse(res))
    .then(parsedRes => console.log(parsedRes.data.text))
    .catch(err => console.log('Error: ', err))
}

testGreeting().then(result => console.log(result))