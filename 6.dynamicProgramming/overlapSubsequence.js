/*
overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

const overlapSubsequenceTab = (str1, str2) => {
  let max = 0

  const table = ["0,0"]

  for (let iStr1 = 0; iStr1 < str1.length; iStr1 += 1) {
    const newTableVal = new Set()

    for (let oldPath of table.slice(0, iStr1 + 1).flat()) {
      // console.log(oldPath)

      const [oldPathLength, oldPathFinalIndexInStr2] = oldPath.split(",").map(Number)

      const iLetterInStr2 = str2.indexOf(str1[iStr1], oldPathFinalIndexInStr2)

      if (iLetterInStr2 === -1) continue
      if (iLetterInStr2 < oldPathFinalIndexInStr2) continue

      max = oldPathLength + 1 > max ? oldPathLength + 1 : max

      newTableVal.add(`${oldPathLength + 1},${iLetterInStr2 + 1}`)
    }

    table.push(Array.from(newTableVal))
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
