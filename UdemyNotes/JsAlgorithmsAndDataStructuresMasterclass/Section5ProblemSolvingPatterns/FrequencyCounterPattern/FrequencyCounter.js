function same(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    let correcIndex = second.indexOf(first[i] ** 2);
    if (correcIndex === -1) {
      return false;
    }
    second.splice(correcIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));

// ---------------------------------------------------

function sameTwo(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("different lengths");

    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    (freqCounter1[val] = freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    (freqCounter2[val] = freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      console.log("first if");
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      console.log("second if");
      return false;
    }
  }
  return true;
}

console.log(sameTwo([1, 2, 3], [1, 4, 9]));
