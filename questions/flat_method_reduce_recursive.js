const flattenArr = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) acc.push(...flattenArr(val));
    else acc.push(val);
    return acc;
  }, []);
};
const arr = [2, 5, 2, [3, 5, 2, [2, 5, [2]]]];
const depth = 3;
const result = flattenArr(arr, 3);
console.log(result, "result result result");
