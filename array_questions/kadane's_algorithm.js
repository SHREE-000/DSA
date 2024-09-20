// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

const findMaxSum = (nums) => {
    let maxSum = 0;
    let tempMax = 0;
    for(let i = 0; i < nums.length; i ++) {
        tempMax += nums[i];
        if(maxSum < tempMax) maxSum = tempMax;
        if(tempMax < 0) tempMax = 0;
    };
    return maxSum;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
const result = findMaxSum(nums);
console.log(result, 'result result');
