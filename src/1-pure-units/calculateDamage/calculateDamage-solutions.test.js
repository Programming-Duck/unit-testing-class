import calculateDamage from './calculateDamage';

describe('calculateDamage', function() {
  test('should return 0 when defense is higher than attack', function() {
    const result = calculateDamage(0, 1000);
    expect(result).toBe(0);
  })

  test('calculateDamage(5, 0) should return 5', function() {
    const result = calculateDamage(5, 0);
    expect(result).toBe(5);
  });

  test('calculateDamage(37, 9) should return 28', function() {
    const result = calculateDamage(37, 9);
    expect(result).toBe(28);
  });
});