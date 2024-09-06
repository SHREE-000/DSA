// Input:
// strs = ["eat","tea","tan","ate",
// "nat","bat"]
// Output:
// [["bat"],["nat","tan"],
// ["ate","eat","tea"]]

const findAnagram = (str) => {
    const finalResult = {};
    const len = str.length;
    for(let i = 0; i < len; i ++) {
      const word = str[i].split("").sort().join("");
      if(!finalResult[word]) finalResult[word] = [];
       finalResult[word].push(str[i]);
    }
    return Object.values(finalResult);
  };
  
  const str = ["eat","tea","tan","ate", "nat","bat"];
  const result = findAnagram(str);
  console.log(result, 'result')
  