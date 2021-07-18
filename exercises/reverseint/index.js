// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//1st solution
// function reverseInt(n) {
//   return n < 0
//     ? 0 - parseInt(n.toString().split("").reverse().join(""))
//     : parseInt(n.toString().split("").reverse().join(""));
// }

function reverseInt(n) {
  return Math.sign(n) * parseInt(n.toString().split("").reverse().join(""));
}
module.exports = reverseInt;
