// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// A complement pair is a pair where both the positive and negative versions
// of a number exist within the input.
// The output is returned as an array of unique elements.
// The output can only have positive elements.
// Example input 1: [6, -1, -2, 9, -9, 1, 6, -9]
// output: [1, 9] || [9, 1]

// The order does not matter.
// 1 is included because there is both a positive and a negative 1.
// 9 is included because there is both a positive and a negative 9.
// Example input 2: [-6, -2, 9, -1, 6, 1, 1, -2]
// output: [6,1]
function pairs(array) {
  if (array.length < 2) {
    return false;
  }
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (!(array[k] === array[i])) {
        console.log("unequal");
        if (Math.abs(array[i]) === Math.abs(array[k])) {
          console.log("try");
          if (!pairs.includes(Math.abs(array[k]))) {
            pairs.push(Math.abs(array[k]));
          }
        }
      }
    }
  }
  console.log("Pairs: " + pairs);
}

console.log(pairs([6, -1, -2, 9, -9, 1, 6, -9]));

// * Given three strings of the same length return a string of the characters
//  included in all three strings.
// * Must be done in linear space and linear time.
// * The output should have unique characters.
// Example input 1: 'abcde', 'dafge', 'dageb' �output: 'ade'
//   * The letters 'a', 'd', and 'e' are included in each of the three input strings.
// Example input 2: 'horse', 'rocks', 'sheer'
// output: ’rs’
