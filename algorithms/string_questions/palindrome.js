const findPalindrome = (string) => {
    const str = string.toString();
    let left = 0;
    let right = str.length - 1;
    while(left < right) {
      if(str[left] !== str[right]) return false;
      left ++;
      right --;
    }
    return true;
  };
  
  const str = "amma";
  const result = findPalindrome(str);
  console.log(result, 'result');