const btrMath = require('../src/index');

test('pythagorean', () => {
  expect(btrMath.pythagorean(3, 4)).toBe(5);
});
