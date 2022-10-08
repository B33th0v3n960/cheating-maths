// Here are some example code
import { permutation } from './modules/permutation.js'
import { append } from './modules/file.js'

const events = ['a', 'b', 'c', 'd', 'e']
const result = permutation(events, 5)
const file = './txt-files/test.txt'

result.forEach((element) => {
  append(file, element)
})

console.log(result)
