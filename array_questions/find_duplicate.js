// Find duplicates in O(n) time and O(1) extra space | Set 1
// Given an array of n elements that contains elements from 0 to n-1, 
// with any of these numbers appearing any number of times. 
// Find these repeating numbers in O(n) and use only constant memory space.

// Note: The repeating element should be printed only once.

// Example: 

// Input: n=7 , array[]={1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6
// Explanation: The numbers 1 , 3 and 6 appears more than once in the array.

// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3
// Explanation: The number 3 appears more than once in the array.

const findDuplicate = (arr) => {
    const obj = [];
    const set = new Set();
    let count = 0;
    for(let i = 0; i < arr.length; i ++) {
        count ++;
        set.add(arr[i]);
        if(set.size !== count) {
            obj.push(arr[i]);
            count = set.size;
        }
    }
    return obj;
};

// const arr = [1, 2, 3, 6, 3, 6, 1];
const arr = [1, 2, 3, 4 ,3];
const result = findDuplicate(arr);
console.log(result, 'result result result');