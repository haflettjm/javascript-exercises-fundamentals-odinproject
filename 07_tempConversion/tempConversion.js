
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}
const ftoc = function(f) {
  // [°C] = ([°F] − 32) × 5⁄9
  let conversion = (f  - 32) * 5/9
  conversion = conversion.round(1)
  return conversion;
};

const ctof = function(c) {
  // [°F] = [°C] × 9⁄5 + 32 
  let conversion = (c  * 9/5) + 32
  conversion = conversion.round(1)
  return conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
