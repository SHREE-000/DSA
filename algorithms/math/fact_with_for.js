const factorial = (n) => {
    let result = 1;
    if(n === 0) return 0;
    else if(n === 1 || n === 2) return 1;
    else {
        for(let i = 1; i <= n; i ++) {
            result *= i;
        }
    }
    return result;
};

const result = factorial(3);
console.log(result, 'result result result');