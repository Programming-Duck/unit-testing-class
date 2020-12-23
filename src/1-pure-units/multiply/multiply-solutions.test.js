import multiply from './multiply';

describe('multiply', function() {
  test('multiply(0, 0) should return 0', function() {
    const result = multiply(0, 0);
    expect(result).toBe(0);
  });

  test('multiply(0, 500) should return 0', function() {
    const result = multiply(0, 500);
    expect(result).toBe(0);
  });

  test('multiply(1, 1) should return ', function() {
    const result = multiply(1, 1);
    expect(result).toBe(1);
  });

  test('multiply(1, -1) should return -1', function() {
    const result = multiply(1, -1);
    expect(result).toBe(-1);
  });

  test('multiply(-1, -1) should return 1', function() {
    const result = multiply(1, 1);
    expect(result).toBe(1);
  })

  test('multiply(125, 28) should return 6', function() {
    const result = multiply(125, 28);
    expect(result).toBe(3500);
  });
});