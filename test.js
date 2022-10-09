import { permutation } from './modules/duplication-permutation-new.js'

const dice = [
  'a',
  'a',
  'a',
  'b',
  'b',
  'b',
  'c',
  'c',
  'c',
  'd',
  'd',
  'd',
  'e',
  'e',
  'e',
  'f', 'f', 'f'
]

const diceOut = permutation(dice, 3)
console.log(diceOut)

console.log(diceOut.length)
