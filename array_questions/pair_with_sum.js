// Given an array A[] of n numbers and another number x, 
// the task is to check whether or not there exist two elements in A[] 
// whose sum is exactly x. 

// Examples: 

// Input: arr[] = {0, -1, 2, -3, 1}, x= -2
// Output: Yes
// Explanation: If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}, x = 0
// Output: No

const findSum = (arr, target) => {
    for(let i = 0; i < arr.length - 1; i ++) {
        for(let j = i + 1; j < arr.length; j ++) {
            if((arr[i] + arr[j]) === target) return 'YES';
        }
    }
    return 'NO';
};

const findSum2pointer = (arr, target) => {
    arr.sort((a, b) => a - b);
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx < rightIdx) {
        if(arr[leftIdx] + arr[rightIdx] === target) return 'YES';
        if(arr[leftIdx] + arr[rightIdx] < target) leftIdx ++;
        else rightIdx --;
    }
    return 'NO';
};

const findSumHash = (arr, target) => {
    const set = new Set();
    for(let i = 0; i < arr.length; i ++) {
        const temp = target - arr[i];
        if(set.has(temp)) return 'YES';
        set.add(arr[i]);
    }
    return 'NO';
}

const arr = [0, -1, 2, -3, 1];
const target = 10;
const result = findSum2pointer(arr, target);
console.log(result, 'result result result');