// const arr1 = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]


const flatArr = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i ++) {
        if(typeof arr[i] ==  "object") {
                result.push(...arr[i]);
        } else result.push(arr[i]);
    }
    return result;
};
const flattenArr = (arr, num) => {
    for(let i = 0; i < num; i ++) {
        let copy = arr;
        if(typeof arr[i] ==  "object") {
            copy = flatArr(arr);
        }
        console.log(copy, 'result result');
    }
        // const res = flatArr(arr)
};

const sampleArr = [1, 2, [3, 4, [5, 6]]];
flattenArr(sampleArr, 3);