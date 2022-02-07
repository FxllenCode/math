module.exports = function quadratic(a, b, c) {
  const first = (-b + (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
  const second = (-b - (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
  return (first, second);
};

// test lol