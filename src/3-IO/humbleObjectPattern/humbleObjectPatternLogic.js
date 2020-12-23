// We change the `event` argument to a `number` argument, because this function shouldn't be concerned with IO
function calculateAnswer(number) {
  const answer = number * 4;
  return answer;
}

export {calculateAnswer};