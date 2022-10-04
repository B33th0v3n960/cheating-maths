const events = ["a", "b", "c", "d", "e"];
const trialCount = 4;

const ans = permutation(events, 3);
console.log(ans);
console.log(ans.length);


function permutation(events, trialCount) {
  const result = [];

  if (trialCount === 1) return events;
  if (events.length < trialCount) console.error("invalid input");

  rec([], events, trialCount, result);

  return result;
}

function rec(input, events, n, output) {
  if (input.length === n) {
    console.log("push");
    return output.push(input);
  }

  console.log("recursion is working");
  console.log(input, events, n, output);

  for (let i = 0; i < 5; i++) {
    console.log("hello world", i);
  }

  for (let i = 0; i < events.length; i++) {
    console.log("looping");
    const eventCopy = [...events];
    const cache = eventCopy.splice(i, 1);
    const temp = [...input];

    temp.push(cache);
    rec(temp, eventCopy, n, output);
  }
}
