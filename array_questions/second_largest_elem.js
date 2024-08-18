const findSecondLargElem = (arr) => {
    const len = arr.length;
    let max = 0; 
    let secondLargest = 0;
    for(let i = 0; i < len; i ++) {
        if(max < arr[i]) {
            secondLargest = max;
            max = arr[i]
        } else if(arr[i] < max && secondLargest < arr[i]) secondLargest = arr[i];
    }
    return secondLargest;
};

const arr = [4, 53, 2, 5, 1, 1, 2, 55, 57, 57, 56, 53, 56];
const result = findSecondLargElem(arr);
console.log(result, 'result result');