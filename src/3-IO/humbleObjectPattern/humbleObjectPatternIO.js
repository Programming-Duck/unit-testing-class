import {calculateAnswer} from './humbleObjectPatternLogic';

function main() {
  const body = document.body;
  body.addeventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  const number = Number(event.key);
  const answer = calculateAnswer(number);

  // write results to the DOM
  document.body.append(answer);
}

export default main;