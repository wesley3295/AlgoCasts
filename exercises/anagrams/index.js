// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//my first solution (obj comparison)
// function anagrams(stringA, stringB) {
//   // replace white spaces and punctuation with empty strings and convert and uppercase to lowercase
//   const stringC = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const stringD = stringB.replace(/[^\w]/g, "").toLowerCase();

//   // make objects to compare against
//   const obj1 = stringC.split("").reduce((acc, curr) => {
//     Object.keys(acc).includes(curr) ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {});

//   const obj2 = stringD.split("").reduce((acc, curr) => {
//     Object.keys(acc).includes(curr) ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {});

//   // if the object is not null and is an 'object' return true
//   function isObject(object) {
//     return object != null && typeof object === "object";
//   }

//   //deep  equality on object
//   function deepEqual(object1, object2) {
//     //grab keys of objects
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
//     // make sure lengths of keys are equal
//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (const key of keys1) {
//       const val1 = object1[key];
//       const val2 = object2[key];
//       const areObjects = isObject(val1) && isObject(val2);
//       if (
//         //as soon as the compared properties are objects, a recursive call starts to verify whether the nested objects are equal too.
//         (areObjects && !deepEqual(val1, val2)) ||
//         (!areObjects && val1 !== val2)
//       ) {
//         return false;
//       }
//     }

//     return true;
//   }

//   return deepEqual(obj1, obj2);
// }
function anagrams(stringA, stringB) {
  // replace white spaces and punctuation with empty strings and convert and uppercase to lowercase
  const stringC = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringD = stringB.replace(/[^\w]/g, "").toLowerCase();
  return (
    stringD.split("").sort().join("") === stringC.split("").sort().join("")
  );
}

module.exports = anagrams;
