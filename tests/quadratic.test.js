const btrMath = require('../src/index');

test('quadratic1', () => {
  expect(btrMath.quadratic(1, 3, 2)).toBe(-2, 1);
});

test('quadratic2', () => {
  expect(btrMath.quadratic(2, -21, 40)).toBe(5 / 2, 8);
});
