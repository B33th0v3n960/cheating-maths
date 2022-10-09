import { permutation } from './modules/duplication-permutation-new.js'
import { append } from './modules/file.js'
import { getPermutation } from './modules/duplication-permutation.js'

const events = ['a', 'b', 'c', 'd', 'e', 'f', 'f', 'f']
// const result = permutation(events, 7)
const file = './txt-files/test.txt'

const dice = [
  'a',
  'a',
  'a',
  'a',
  'b',
  'b',
  'b',
  'b',
  'c',
  'c',
  'c',
  'c',
  'd',
  'd',
  'd',
  'd',
]

// result.forEach((element) => {
//   append(file, element)
// })

// console.log(result)

// console.log(result.length)

const diceOut = permutation(dice, 4)
console.log(diceOut)

console.log(diceOut.length)
// console.log(getPermutation(events))

// console.log(getPermutation([1, 2, 3]))

// console.log(getPermutation([0, 1, 1, 0]))

// console.log(result)
