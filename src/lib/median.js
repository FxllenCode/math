const floatUtil = require('./utils/isFloat');

module.exports = function median(...numbers) {
  const amount = numbers.length;
  let final = 0;
  if (floatUtil.isFloat(amount / 2)) {
    final = Math.floor(amount / 2) + 1;
  }
};
