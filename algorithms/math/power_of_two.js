const power_of_two = (no) => {
    if(no < 1) return false;
    while(no > 1) {
        if(no % 2 !== 0) return false;
        no = no / 2;
    }
    return true;
};

const result = power_of_two(8);
console.log(result, 'result result result');