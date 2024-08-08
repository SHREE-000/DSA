const findElem = (arr, num) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) return i;
    }
    return -1;
};

const arr = [2, 3, 12, 2, 5, 14, 5, 1];
const num = 5
const result = findElem(arr, num);
console.log(result, 'result result result');