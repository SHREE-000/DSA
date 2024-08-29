const quickSort = (arr) => {
    if(arr.length < 2) return arr;
    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];
    for(let i = 0; i < arr.length -1; i ++) {
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [1, 2, 56, 1, 3, 4, 1, 11, 523 , 12];
const result = quickSort(arr);
console.log(result, 'result result result');