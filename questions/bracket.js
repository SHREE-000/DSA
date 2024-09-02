const setBracket = (no) => {
    let finalObj = {};
    for(let i = 0; i < no; i ++) {
        finalObj = `{${finalObj}}`;
    }
    return finalObj;
};

const setBracketRec = (no) => {
    let finalObj = {};
    if(no === 0) return finalObj;
    else {
        return `{${setBracket(no - 1)}}`
    } 
}

const result = setBracketRec(3);
console.log(result, 'result reuslt result');