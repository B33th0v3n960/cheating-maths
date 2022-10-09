export function getPermutation(arr) {
  const output = []

  generate(arr.length, arr.slice())

  return output

  function swap(arrToSwap, indexA, IndexB) {
    const temp = arrToSwap[indexA]
    arrToSwap[indexA] = arrToSwap[IndexB]
    arrToSwap[IndexB] = temp
  }

  function generate(n, heapArr) {
    if (n === 1) return output.push(heapArr.slice())

    generate(n - 1, heapArr)

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) swap(heapArr, i, n - 1)
      else swap(heapArr, 0, n - 1)

      generate(n - 1, heapArr)
    }
  }
}
