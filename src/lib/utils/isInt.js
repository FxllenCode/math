module.exports = function isInt(number) {
  const er = /^-?[0-9]+$/;

  return er.test(number);
};
