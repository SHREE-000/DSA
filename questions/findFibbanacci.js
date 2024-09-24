function findFibonacciInRange(min, max) {
    let fibNumbers = [];
    let a = 0, b = 1;
    
    while (b <= max) {
        if (b >= min) {
            fibNumbers.push(b);
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return fibNumbers;
}

const min = 1000;
const max = 7000;

const result = findFibonacciInRange(min, max);
console.log(`Fibonacci numbers between ${min} and ${max}:`, result);
