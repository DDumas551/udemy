function insertionSort(array) {
  let outerLoop = 0;
  let innerLoop = 0;
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
      innerLoop++;
      console.log("Inner Loop: " + innerLoop);
    }
    array[j + 1] = currentVal;
    outerLoop++;
    console.log("Outer Loop:      " + outerLoop);
  }
  return array;
}

console.log(insertionSort([9, 2, 4, 6, 10, 1, 3, 5, 7, 8]));
