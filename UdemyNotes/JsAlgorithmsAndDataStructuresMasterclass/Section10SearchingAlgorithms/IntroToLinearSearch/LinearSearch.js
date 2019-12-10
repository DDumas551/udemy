// indexOf
//includes
//find
//findIndex

//Linear Search
//search for 12

function findNum(nums, num) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(findNum([1, 2, 3, 4, 5, 12, 6, 7, 8, 9], 12));
