function selectionSort(array) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[lowest]) {
        lowest = k;
      }
    }
    if (i !== lowest) {
      swap(array, i, lowest);
      //   let temp = array[i];
      //   array[i] = array[lowest];
      //   array[lowest] = temp;
    }
  }
  return array;
}

console.log(selectionSort([3, 2, 7, 1, 6, 4, 9, 5, 8]));
