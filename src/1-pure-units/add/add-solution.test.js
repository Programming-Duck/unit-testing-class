import add from './add';

describe('add', function() {
  test('add(0, 0) should return 0', function() {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

  test('add(1, 2) should return 3', function() {
    const result = add(1, 2);
    expect(result).toBe(3);
  })

  test('add(-1, -2) should return -3', function() {
    const result = add(-1, -2);
    expect(result).toBe(-3);
  })

  test('add(1000000, 230145) should return 1230145', function() {
    const result = add(1000000, 230145);
    expect(result).toBe(1230145);
  })
});


describe('add (with some manual refactoring)', function() {
  function testAdd(valuesToAdd, expectedResult) {
    const result = add(...valuesToAdd);
    expect(result).toBe(expectedResult);
  }

  test('add(0, 0) should return 0', function() {
    testAdd([0, 0], 0);
  });

  test('add(1, 2) should return 3', function() {
    testAdd([1, 2], 3);
  })

  test('add(-1, -2) should return -3', function() {
    testAdd([-1, -2], -3);
  })

  test('add(1000000, 230145) should return 1230145', function() {
    testAdd([1000000, 230145], 1230145);
  })
});


describe('add (with some refactoring provided by our testing framework)', function() {
  test.each([
    [[0, 0], 0],
    [[1, 2], 3],
    [[-1, -2], -3],
    [[1000000, 230145], 1230145],
  ])('.add(%s) should return %d', function(args, expected) {
    const result = add(...args);
    expect(result).toBe(expected);
  });
});