// Given an array that contains both positive and negative integers, 
// the task is to find the product of the maximum product subarray. 

// Examples:

// Input: arr[] = {6, -3, -10, 0, 2}
// Output:  180
// Explanation: The subarray is {6, -3, -10}

// Input: arr[] = {-1, -3, -10, 0, 60}
// Output:   60
// Explanation: The subarray is {60}

const findMaxProduct = (arr) => {
    const len = arr.length;
    if (len === 0) return 0;

    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxSoFar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
          // Swap maxEndingHere and minEndingHere when encountering a negative number
          [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }
        maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i]);
        minEndingHere = Math.min(arr[i], minEndingHere * arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
      }
      return maxSoFar;
    }
const arr = [6, -3, -10, 0, 2];
const result = findMaxProduct(arr);
console.log(result, 'result resutl result');