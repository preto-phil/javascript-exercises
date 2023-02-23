const ftoc = function(x) {
  let y = (x - 32) / 9 * 5;
  y = Math.round(y);
  return y;
};

const ctof = function(x) {
  let y = (x / 9 * 5) + 32;
  y = Math.round(y);
  return y;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
