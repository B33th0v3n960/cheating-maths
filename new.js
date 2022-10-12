import { permutation } from './modules/duplication-permutation-new.js'
import { append } from './modules/file.js'

const dice = ['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd']

const diceOut = permutation(dice, 6)
console.log(diceOut)

console.log(diceOut.length)

const file = './txt-files/permutation.txt'

diceOut.forEach((element) => {
  append(file, element)
})
