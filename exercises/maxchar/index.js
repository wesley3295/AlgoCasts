// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = str.split("").reduce((acc, curr) => {
    Object.keys(acc).includes(curr) ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

module.exports = maxChar;
