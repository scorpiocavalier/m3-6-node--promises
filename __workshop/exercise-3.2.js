// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client')
require('dotenv').config({ path: '../.env' })

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  }

  return (
    opencage
      .geocode(requestObj)
      .then(data => {
        if (data.status.code == 200 && data.results.length > 0) {
          const place = data.results[0]
          return place.geometry
        }
      })
      .catch(err => console.log('error', err.message))
  )
}

const addresses = [
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8',
  '5455 Grande-Allee Brossard, QC J4Z3H1',
  '2035A Rue Victoria, Brossard, QC J4S 1H1'
]

addresses.forEach(address => {
  getPositionFromAddress(address).then(res => console.log(res))
})