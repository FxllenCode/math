const btrMath = require('../src/index');

test('average1', () => {
  expect(btrMath.average(10, 20)).toBe(15);
});

test('average2', () => {
  expect(btrMath.average(10, 10, 10, 10, 10, 10, 10, 10, 10, 10)).toBe(10);
});
