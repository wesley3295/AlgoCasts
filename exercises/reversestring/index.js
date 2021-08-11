// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//linear runtime
//1st solution
// function reverse(str) {
//     //split string into array
//     // reverse the array
//     // join array into string
//   return str.split("").reverse().join("");
// }

//2nd solution
// function reverse(str) {
//    //make variable 'reversed' an empty string
//  // loop through string and + character to reversed variable =ing to reversed variable
//   
//let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//3rd solution
function reverse(str) {
// split str into array
// reduce setting cb to reversedStr + character, setting the accumulator in reduce to empty string.
  return str.split("").reduce((reversedStr, char) => char + reversedStr, "");
}

module.exports = reverse;
