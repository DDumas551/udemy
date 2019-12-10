function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + 1 < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

//-------------------------------------------------------

function multiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(multiplePointers([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
