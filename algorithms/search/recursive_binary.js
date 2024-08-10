const recursiveBinary = (arr, target) => search(arr, target, 0, arr.length - 1);

const search = (arr, target, leftIdx, rightIdx) => {
    if(leftIdx > rightIdx) return -1;
    const middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    if(arr[middleIdx] === target) return middleIdx;
    if(arr[middleIdx] < target) return search(arr, target, middleIdx + 1, rightIdx);
    else return search(arr, target, leftIdx, middleIdx - 1);
};

const arr = [1, 4, 5, 11, 52, 211];
const target = 5;
const result = recursiveBinary(arr, target);
console.log(result,'result result result');