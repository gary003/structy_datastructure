/*
overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

/*
A tabulation way to do the exercice ( not as efficient as memoization)
*/

const overlapSubsequenceTab = (str1, str2) => {
  // console.log(str1.length, str2.length)

  let max = 0

  const table = Array(str1.length + 1).fill([])
  table[0] = [[0, 0]]

  for (let iStr1 = 0; iStr1 < str1.length; iStr1 += 1) {
    let newTableVal = []
    // console.log(table[iStr2])

    for (let oldPath of table.slice(0, iStr1 + 1).flat()) {
      // console.log(oldPath, str1[iStr2 + 1])

      let letterInStr2 = str2.indexOf(str1[iStr1], oldPath[1])

      if (letterInStr2 === -1) continue

      let iLetterInStr2 = letterInStr2

      if (iLetterInStr2 < oldPath[1]) continue

      let idxShift = str1[iStr1] === str2[iLetterInStr2] ? 1 : 0

      const newValue = [oldPath[0] + 1, iLetterInStr2 + idxShift]

      if (oldPath[0] + 1 > max) max = newValue[0]

      newTableVal.push(newValue)
    }

    table[iStr1 + 1] = newTableVal
    // console.log(table)
  }

  return max
}

console.log(overlapSubsequenceTab("dogs", "daogt")) // -> 3
console.log(overlapSubsequenceTab("dogt", "datog")) // -> 3
console.log(overlapSubsequenceTab("xcyats", "criaotsi")) // -> 4
console.log(overlapSubsequenceTab("vese", "esve")) // -> 3
console.log(overlapSubsequenceTab("xfeqortsver", "feeeuavoeqr")) // -> 5

console.log(overlapSubsequenceTab("eeeee", "feeer")) // -> 3
console.log(overlapSubsequenceTab("xfeeeeever", "feeeuavoeqr")) // -> 7
console.log(overlapSubsequenceTab("edee", "ee")) // -> 2

console.log(overlapSubsequenceTab("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
console.log(overlapSubsequenceTab("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15

const overlapSubsequenceMemo = (str1, str2, iStr1 = 0, iStr2 = 0, memo = {}) => {
  if (`${iStr1}-${iStr2}` in memo) return memo[`${iStr1}-${iStr2}`]
  if (iStr1 >= str1.length || iStr2 >= str2.length) return 0

  if (str1.charAt(iStr1) === str2.charAt(iStr2)) {
    memo[`${iStr1}-${iStr2}`] = 1 + overlapSubsequenceMemo(str1, str2, iStr1 + 1, iStr2 + 1, memo)
    return memo[`${iStr1}-${iStr2}`]
  }

  const left = overlapSubsequenceMemo(str1, str2, iStr1 + 1, iStr2, memo)
  const right = overlapSubsequenceMemo(str1, str2, iStr1, iStr2 + 1, memo)

  const result = Math.max(left, right)
  memo[`${iStr1}-${iStr2}`] = result

  return result
}

console.log(overlapSubsequenceMemo("dogs", "daogt")) // -> 3
console.log(overlapSubsequenceMemo("dogt", "datog")) // -> 3
console.log(overlapSubsequenceMemo("xcyats", "criaotsi")) // -> 4
console.log(overlapSubsequenceMemo("vese", "esve")) // -> 3
console.log(overlapSubsequenceMemo("xfeqortsver", "feeeuavoeqr")) // -> 5

console.log(overlapSubsequenceMemo("eeeeeeeeeeee", "feeer")) // -> 3
console.log(overlapSubsequenceMemo("xfeeeeever", "feeeuavoeqr")) // -> 7
console.log(overlapSubsequenceMemo("edee", "ee")) // -> 2

console.log(overlapSubsequenceMemo("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
console.log(overlapSubsequenceMemo("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15
