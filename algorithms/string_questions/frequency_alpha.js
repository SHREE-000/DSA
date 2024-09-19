const findMostFrequentString = (str) => {
    let temp = "";
    let result = "";
    for(let i = 0; i < str.length - 1; i ++) {
        asciNo = str.charCodeAt(i);
        nextAsciNo = str.charCodeAt(i + 1);
        if(nextAsciNo === asciNo + 1) {
            temp += str[i];
        }
        else {
            lastI = "";
            if(result.length < temp.length) {
                result = temp;
            }
            temp = "";
        }
    };
    if(result.length < temp.length) {
        result = temp;
    }
    return result;
};

const str = "randomabcdefghiuvwxlmnopqrs";
const result = findMostFrequentString(str);

console.log(result, 'result result result');