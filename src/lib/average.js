module.exports = function average(...nums) {
  let finalNumber = 0;
  const amount = nums.length;

  for (const number of nums) {
    finalNumber += number;
  }

  return (finalNumber / amount);
};
