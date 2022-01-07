// Solution:

var twoSum = function(nums, target) {
  let result = [];
  nums.forEach(function(item, index) {
    for (let i = index + 1; i <= nums.length -1; i++){
      if (item + nums[i] === target) {
        result.push(index);
        result.push(i);
      }
    }
  });
  return result;
};

// Tests:

twoSum([2,7,11,15], 9); // [0,1]
twoSum([3,2,4], 6);     // [1,2]
twoSum([3,3], 6);       // [0,1]
