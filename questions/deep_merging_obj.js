// function deepMerge(target, source) {
//     for(let x in source) {
//         if(typeof source[x] !== 'object') {
//             target[x] = source[x];
//         } else {
//             deepMerge(target[x] || {}, source[x])
//         }
//     }
//     return target;
// }

function deepMergeUsingStack(target, source) {
    const stack = [{target, source}];
    while(stack.length > 0) {
        const {target, source} = stack.pop();
        for(let x in source) {
            if(typeof source[x] !== 'object') target[x] = source[x];
            else stack.push({target: target[x] || {}, source: source[x]})
        }
    }
    return target;
};

// Example usage
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

const obj2 = {
    b: {
        d: 4,
        e: 5
    },
    f: 6
};

const result = deepMergeUsingStack(obj1, obj2);
console.log(result);
