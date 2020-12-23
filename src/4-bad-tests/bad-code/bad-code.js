let number = 5;

function double() {
  number *= 2;
}

function someFunctionThatUsesDouble() {
  document.body.append(number);
}

export {double, someFunctionThatUsesDouble};