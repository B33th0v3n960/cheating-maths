export function permutation(events, trialCount) {
  const result = [];

  if (trialCount === 1) return events;
  if (events.length < trialCount) console.error("invalid input");

  rec([], events, trialCount, result);

  return result;
}

function rec(input, events, n, output) {
  if (input.length === n) {
    return output.push(input);
  }

  for (let i = 0; i < events.length; i++) {
    const eventCopy = [...events];
    const cache = eventCopy.splice(i, 1);
    const temp = [...input];

    temp.push(cache);
    rec(temp, eventCopy, n, output);
  }
}
