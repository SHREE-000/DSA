const flattenArr = (arr, depth = 1) => {
    return arr.reduce((acc, val) => {
        if(Array.isArray(val) && depth > 0) acc.push(...flattenArr(val, depth - 1));
        else acc.push(val);
        return acc;
    }, [])
  };
  const arr = [[2, [5, 2]], [3, 5, 2, [2, 5, [2]]]];
  const depth = 3;
  const result = flattenArr(arr, 1);
  console.log(result, "result result result");
  