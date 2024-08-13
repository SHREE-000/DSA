const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i ++) {
        for(let j = 0; j < arr.length - i - 1; j ++) {
            if(arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        };
    }
    return arr;
};

const arr = [1, 2, 56, 1, 3, 4, 1, 11, 523 , 12];
const result = insertionSort(arr);
console.log(result, "result result result");