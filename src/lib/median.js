const floatUtil = require('./utils/isInt');

module.exports = function median(...numbers) {
  const amount = numbers.length;
  let final = 0;
  let finalMedian = 0;
  const sorted = numbers.slice().sort((a, b) => a - b);
  console.log(floatUtil(1));
  if (floatUtil(amount / 2) === false) {
    console.log(sorted);
    final = Math.floor(amount / 2);
    let index = 0;
    for (const number of sorted) {
      index += 1;
      if (index - 1 === final) {
        finalMedian = number;
      }
    }
  } else {
    let index = 0;
    for (const number of sorted) {
      index += 1;
      if (index - 1 === amount / 2) {
        finalMedian = number;
      }
    }
  }
  return finalMedian;
};

console.log(module.exports(1, 3, 1, 4, 4, 1, 6, 5));

