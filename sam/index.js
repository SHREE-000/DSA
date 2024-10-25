const fs = require('fs');
const day1 = fs.readFileSync("./sam/day1.log",  { encoding: 'utf8', flag: 'r' })
const repeatedCustomer = new Set();

const splittedDay1Arr= day1.split(", ");
let count = 0;
const set = new Set();
const obj = {};
for(let i = 0; i < splittedDay1Arr.length; i++) {
    count ++;
    const page = splittedDay1Arr[1];
    console.log(page, 'page');
    
    const userId = splittedDay1Arr[1 + 1].split("\r")[0];
    if(!obj[userId]) obj[userId] = [page];
    else {
        if(!obj[userId].find()) {
            obj[userId].push(page);
        }
    }
    set.add(userId);
    if(set.size !== count) {
        repeatedCustomer.add(userId);
        count = set.size;
    } 
}

console.log(obj, 'repeatedCustomer repeatedCustomer');


