/*
max palin subsequence
Write a function, maxPalinSubsequence, that takes in a string as an argument. 
The function should return the length of the longest subsequence of the string that is also a palindrome.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

const maxPalinSubsequence = (str) => {
  if (str === str.split("").reverse().join("")) return str.length

  let max = 0

  const table = Array(str.length + 1)
    .fill()
    .map((_) => new Set())

  table[0] = new Set([`${str},0`])

  for (let iTable = 0; iTable < table.length; iTable += 1) {
    for (let subStr of table[iTable]) {
      // console.log(subStr)

      const [strValue, palinL] = subStr.split(",")

      max = Number(palinL) > max ? Number(palinL) : max

      if (strValue.length === 1 || strValue.length === 0) continue

      // console.log(strValue.charAt(0), strValue.charAt(strValue.length - 1))

      if (strValue.charAt(0) === strValue.charAt(strValue.length - 1)) {
        table[iTable + 1].add(`${strValue.slice(1, strValue.length - 1)},${Number(palinL) + 2}`)
      } else {
        const newLeftPalinL = strValue.slice(1).length === 1 ? Number(palinL) + 1 : Number(palinL)
        const newRightPalinL = strValue.slice(0, strValue.length - 1).length === 1 ? Number(palinL) + 1 : Number(palinL)

        table[iTable + 1].add(`${strValue.slice(1)},${newLeftPalinL}`)
        table[iTable + 1].add(`${strValue.slice(0, strValue.length - 1)},${newRightPalinL}`)
      }
    }
  }

  console.log(table)
  return max
}

console.log(maxPalinSubsequence("arrta")) // -> 4
console.log(maxPalinSubsequence("luwxult")) // -> 5
// console.log(maxPalinSubsequence("xyzaxxzy")) // -> 6
// console.log(maxPalinSubsequence("lol")) // -> 3
// console.log(maxPalinSubsequence("boabcdefop")) // -> 3
// console.log(maxPalinSubsequence("z")) // -> 1
// console.log(maxPalinSubsequence("chartreusepugvicefree")) // -> 7
// console.log(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")) // -> 15
// console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")) // -> 31
// console.log(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")) // -> 15

/*
const maxPalinSubsequence = function(str, i = 0, j = str.length - 1, memo = {}) {
    const key = i + ',' + j;
    if (key in memo) return memo[key];
  
    if (i === j) return 1;
    
    if (i > j) return 0;
  
    if (str[i] === str[j]) {
      memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
    } else {
      memo[key] = Math.max(
        maxPalinSubsequence(str, i + 1, j, memo),
        maxPalinSubsequence(str, i, j - 1, memo)
      );
    }
  
    return memo[key];
};
*/
