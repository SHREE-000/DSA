const arr = [2, 5, 1, 2, 0, -3, 4, -2, 2, -1, 7, 1, 2, 1, -2, -1, 3, 6];

const result = [];
const map = {};

for (let i = 0; i < arr.length; i++) {
    const complement = -arr[i];
    if (map[complement] > 0) {
        result.push([arr[i], complement]);
        map[complement]--;
    } else {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
}

console.log(result);
