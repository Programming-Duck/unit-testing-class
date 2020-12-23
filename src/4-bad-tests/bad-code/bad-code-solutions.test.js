import {double, someFunctionThatUsesDouble} from './bad-code';

// The value of `number` depends on the order of the execution of the tests. This is bad. It means we can't run these tests concurrently or in random order

test('someFunctionThatUsesDouble', function() {
  someFunctionThatUsesDouble();
  expect(document.body.textContent.includes(5)).toBe(true);
})

test('someFunctionThatUsesDouble after doubling once', function() {
  double();
  someFunctionThatUsesDouble();
  expect(document.body.textContent.includes(10)).toBe(true);
})

// This function fails because double is global, has already been doubled and so has the value 40 here instead of 20
test.skip('someFunctionThatUsesDouble after doubling twice', function() {
  double();
  double();
  someFunctionThatUsesDouble();
  expect(document.body.textContent.includes(20)).toBe(true);
})