const finalArr = [];
const flattenArr = (arr, depth) => {
    for(let i = 0; i < arr.length; i ++) {
        if(typeof arr[i] === 'object') finalArr.push(flattenArr(arr[i]));
        else finalArr.push(arr[i]);
    }
  };
  const arr = [2, 5, 2, [3, 5, 2, [2, 5, [2]]]];
  const depth = 3;
  const result = flattenArr(arr, 3);
  console.log(finalArr, "result result result");
  