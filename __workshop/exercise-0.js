// Exercise 0 (Example)
// ----------
// Write a function testNum that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = num => {
  return new Promise((resolve, reject) => {
    num > 10
      ? resolve(`${num} is greater than 10, success!`)
      : reject(`${num} is less than 10, error!`)
  })
}

// Calling the Promise
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))