const findSum = (no1) => {
    const innerSum = (no2) => {
        if(!no2) return no1;
        else return findSum(no1 + no2);
    };
    return innerSum;
};

const result = findSum(1)(2)(3);
console.log(result(), 'result');