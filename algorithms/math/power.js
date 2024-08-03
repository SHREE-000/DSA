const findPower = (num, pow) => {
    let result = 1;
    for(let i = 1; i <= pow; i ++) {
        result *= num;
    }
    return result;
};

const result = findPower(2, 3);
console.log(result, 'result result result');