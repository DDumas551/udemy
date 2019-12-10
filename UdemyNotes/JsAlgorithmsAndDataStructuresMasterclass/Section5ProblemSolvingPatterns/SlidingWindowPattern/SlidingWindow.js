function slidingWindow(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let k = 0; k < num; k++) {
      temp += arr[i + k];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(slidingWindow([1, 2, 3, 2, 1, 2, 3, 45, 6, 7, 8], 2));

//--------------------------------------------------

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubArraySum([1, 2, 3, 2, 1, 2, 3, 45, 6, 7, 8], 2));
