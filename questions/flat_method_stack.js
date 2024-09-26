const flattenArr = (arr, depth) => {
    const stack = [...arr];
    const result = [];
    let tempDepth = depth;
    while(stack.length) {
        const next = stack.pop();
        if(Array.isArray(next)) {
            stack.push(...next);
            tempDepth --;
        }
        else result.push(next);
    }
    return result.reverse();
  };
  const arr = [[2, [5, 2]], [3, 5, 2, [2, 5, [2]]]];
  const depth = 3;
  const result = flattenArr(arr, 1);
  console.log(result, "result result result");
  