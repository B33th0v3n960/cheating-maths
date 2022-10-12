import { permutation } from './modules/permutation.js'
import { append } from './modules/file.js'

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
  'e',
  'e',
  'e',
  'e',
  'f',
  'f',
  'f',
  'f',
]

const diceOut = permutation(dice, 4)
console.log(diceOut)

console.log(diceOut.length)

const file = './txt-files/test.txt'

diceOut.forEach((element) => {
  append(file, element)
})
