const binarySearch = (arr, num) => {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        if(arr[middleIdx] === num) return middleIdx;
        else if(arr[middleIdx] < num) leftIdx = middleIdx + 1;
        else rightIdx = middleIdx - 1; 
    }
    return -1;
};

const arr = [1, 4, 5, 11, 52, 211];
const num = 111;
const result = binarySearch(arr, num);
console.log(result,'result result result');