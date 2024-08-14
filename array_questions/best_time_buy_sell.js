// Best Time to Buy and Sell Stock (at most one transaction allowed)
// Given an array prices[] of length N, 
// representing the prices of the stocks on different days, 
// the task is to find the maximum profit possible by buying 
// and selling the stocks on different days when at most one transaction is allowed.

// Note: Stock must be bought before being sold.

// Examples:

// Input: prices[] = {7, 1, 5, 3, 6, 4}
// Output: 5
// Explanation:
// The lowest price of the stock is on the 2nd day, i.e. price = 1. 
// Starting from the 2nd day, the highest price of the stock is witnessed on the 5th day, 
// i.e. price = 6. 
// Therefore, maximum possible profit = 6 – 1 = 5. 

// Input: prices[] = {7, 6, 4, 3, 1} 
// Output: 0
// Explanation: Since the array is in decreasing order, 
// no possible way exists to solve the problem.

const findBestTime = (arr) => {
    let buy = arr[0];
    let maxProfit = 0;
    for(let i = 0; i < arr.length - 1; i ++) {
        if(buy > arr[i]) buy = arr[i];
        else if(maxProfit < (arr[i] - buy)) maxProfit =  arr[i] - buy;
    }
    return maxProfit;
};

const arr = [7, 1, 5, 3, 6, 4];
// const arr = [7, 6, 4, 3, 1];
const result = findBestTime(arr);
console.log(result, 'result result result');