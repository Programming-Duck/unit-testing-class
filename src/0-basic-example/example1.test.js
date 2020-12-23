import add from './example1';

test('add(1, 1) should return 2', function() {
  const result = add(1, 1);
  expect(result).toBe(2);
})