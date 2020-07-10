// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]
const error = 'Not every element in this array is a string.'

const makeAllCaps = array => {
  return (
    new Promise((resolve, reject) => {
      if(array.every(word => typeof word === 'string'))
        resolve(array.map(word => word.toUpperCase()))
      else
        reject(error)
    })
  )
}

const sortWords = array => {
  return (
    new Promise((resolve, reject) => {
      if(array.every(word => typeof word === 'string'))
        resolve(array.sort())
      else
        reject(error)
    })
  )
}

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error))
