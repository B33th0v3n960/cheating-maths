export function permutation(events, trialCount) {
  const result = []

  if (trialCount === 1) return events
  if (events.length < trialCount) console.error('invalid input')

  rec([], events, trialCount, result)

  return result
}

const stat = { count: 0, duplicate: 0 }

function rec(input, events, n, output) {
  if (input.length === n && !output.includes(input.join(' '))) {
    return output.push(input.join(' '))
  }
  if (input.length === n) return console.log('duplicate:', stat.duplicate++)

  console.log('count:', stat.count++)

  for (let i = 0; i < events.length; i++) {
    const cache = events.splice(i, 1).join(' ')
    const temp = [...input]

    temp.push(cache)
    rec(temp, events, n, output)
    events.splice(i, 0, cache)
  }
}
