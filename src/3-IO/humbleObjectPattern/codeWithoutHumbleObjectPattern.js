function main() {
  const body = document.body;
  body.addeventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  const answer = calculateAnswer(event);

  // do some IO with the results, in this case we write them to the DOM
  document.body.append(answer);
}

function calculateAnswer(event) {
  const key = Number(event.key);
  const answer = key * 4;
  return answer;
}


export default main;