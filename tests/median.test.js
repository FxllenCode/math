const btrMath = require('../src/index');

test('median1', () => {
  expect(btrMath.median(3, 4, 3)).toBe(4);
});
