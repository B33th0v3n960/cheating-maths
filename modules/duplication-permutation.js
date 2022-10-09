export function getPermutation(arr) {
  const output = []
  const flagObj = { flag: true }

  generate(arr.length, arr.slice())

  return output

  function swap(arrToSwap, indexA, IndexB) {
    const temp = arrToSwap[indexA]
    arrToSwap[indexA] = arrToSwap[IndexB]
    arrToSwap[IndexB] = temp

    if (arrToSwap[indexA] === arrToSwap[IndexB]) return (flagObj.flag = false)
    return (flagObj.flag = true)
  }

  function generate(n, heapArr) {
    if (n === 1 && flagObj.flag) return output.push(heapArr.slice())
    if (n === 1) return

    generate(n - 1, heapArr)

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) swap(heapArr, i, n - 1)
      else swap(heapArr, 0, n - 1)

      generate(n - 1, heapArr)
    }
  }
}
