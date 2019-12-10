function countUniqueValues(arr) {
  let inclusive = [];
  for (let i = 0; i < arr.length; i++) {
    if (!inclusive.includes(arr[i])) {
      inclusive.push(arr[i]);
    }
  }
  return inclusive.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 3]));

//---------------------------------------------------------

function countUniqueValues2(arr) {
  let i = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[i] !== arr[k]) {
      i++;
      arr[i] = arr[k];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 2, 3]));
