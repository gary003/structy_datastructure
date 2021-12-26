/*
overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

/*
Not a efficient way to do dynamic programming( avoid handling strings in DP!)
*/

const isValidNewValues = (value, str2) => {
  return (
    value.split("").every((char, i, arr) => {
      const numOfCharInStr2 = str2.split("").filter((char2) => char2 === char).length
      const numOfCharInNewVal = arr.filter((char2) => char2 === char).length
      return numOfCharInStr2 >= numOfCharInNewVal
    }) &&
    value
      .split("")
      .map((x, i, arr) => {
        let memoI = str2.split("").findIndex((str2Char) => str2Char === arr[i - 1])
        const indexInStr2 = str2.split("").findIndex((str2Char, iiii) => str2Char === x && iiii > memoI)
        return indexInStr2
      })
      .every((va, ii, arr) => (ii === 0 ? true : va >= arr[ii - 1]))
  )
}

const overlapSubsequence = (str1, str2) => {
  // console.log(str1.length, str2.length)

  const table = Array(str1.length).fill(new Set())
  table[0] = new Set([str1])

  for (let iTable = 0; iTable < str1.length - 1; iTable += 1) {
    // console.log(table[iTable])
    for (let subS of table[iTable]) {
      // console.log(subS)
      for (let iStr = 1; iStr <= subS.length; iStr += 1) {
        const newVal = subS.slice(0, iStr - 1) + subS.slice(iStr)
        // console.log(subS.slice(0, iStr - 1) + "." + subS.slice(iStr))

        if (isValidNewValues(newVal, str2)) {
          console.log(newVal)
          return newVal.length
        }

        table[iTable + 1].add(newVal)
      }
    }
  }

  return -1
}

console.log(overlapSubsequence("dogs", "daogt")) // -> 3
console.log(overlapSubsequence("dogt", "datog")) // -> 3
console.log(overlapSubsequence("xcyats", "criaotsi")) // -> 4
console.log(overlapSubsequence("vese", "esve")) // -> 3
console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")) // -> 5

console.log(overlapSubsequence("eeeeeeeeeeee", "feeer")) // -> 3
console.log(overlapSubsequence("edee", "ee")) // -> 2
console.log(overlapSubsequence("xfeeeeever", "feeeuavoeqr")) // -> 7

console.log(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
//console.log(overlapSubsequence("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15
