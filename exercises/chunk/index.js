// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//My attempt
// function chunk(array, size) {
//   if (array.length % size === array.length) {
//     return [array];
//   }
//   let subArry = [];
//   return array.reduce((acc, curr) => {
//     if (array[array.length - 1] === curr) {
//       acc.push(subArry);
//     } else if (subArry.length !== size) {
//       subArry.push(curr);
//     } else if (subArry.length === size) {
//       acc.push(subArry);
//       subArry = [];
//       subArry.push(curr);
//     } else if (array.length % size !== 0) {
//       let remainder = array.length % size;
//       for (let i = remainder * -1; i < 0; i++) {
//         subArry.push(array[i]);
//       }
//       acc.push(subArry);
//       subArry = [];
//     }
//     return acc;
//   }, []);
// }
//1st solution
// function chunk(array, size) {
//   const chunked = [];
//   for (let e of array) {
//       const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([e]);
//     } else {
//       last.push(e);
//     }
//   }
//   return chunked;
// }

//2nd solution
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
