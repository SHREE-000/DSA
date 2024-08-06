const isPrime = (n) => {
    for(let i = 2; i < n; i ++) {
        if(n % i === 0) return false
    }
    return true;
};

const result = isPrime(9);
console.log(result, 'result result result');