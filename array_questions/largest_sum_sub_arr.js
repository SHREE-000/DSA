// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

// Given an array arr[] of size N. 
// The task is to find the sum of 
// the contiguous subarray within a arr[] with the largest sum. 

// Example:

// Input: arr = {-2,-3,4,-1,-2,1,5,-3}
// Output: 7
// Explanation: The subarray {4,-1, -2, 1, 5} has the largest sum 7.

// Input: arr = {2}
// Output: 2
// Explanation: The subarray {2} has the largest sum 2.

// Input: arr = {5,4,1,7,8}
// Output: 25
// Explanation: The subarray {5,4,1,7,8} has the largest sum 25.

const findLargestSum = (arr) => {
    const set = new Set();
    let sum = 0;
    for(let i = 0; i < arr.length; i ++) {
        sum += arr[i];
        set.add(sum);
    }
    console.log(set, 'set set');
};

const arr = [-2,-3,4,-1,-2,1,5,-3]
const result = findLargestSum(arr);
console.log(result, 'result result result');