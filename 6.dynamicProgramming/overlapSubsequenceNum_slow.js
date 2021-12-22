/*
overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

const overlapSubsequence = (str1, str2) => {
  // console.log(str1.length, str2.length)

  let max = [0, 0]

  const table = Array(str1.length + 1).fill([])
  table[0] = [[0, 0]]

  for (let iStr1 = 0; iStr1 < str1.length; iStr1 += 1) {
    if (str2.indexOf(str1[iStr1]) === -1) {
      table[iStr1 + 1] = table[iStr1]
      continue
    }

    let newTableVal = []
    for (let iStr2 = 0; iStr2 < str2.length; iStr2 += 1) {
      // console.log(table[iStr2])

      if (!table[iStr2]) continue

      let newPaths = []
      for (let oldPath of table[iStr2]) {
        // console.log(oldPath, str1[iStr2 + 1])

        let plus = str1[iStr1] === str1[iStr2 + 1] ? 1 : 0

        let letterInStr2 = str2.slice(oldPath[1]).indexOf(str1[iStr1])
        if (letterInStr2 === -1) continue

        let iLetterInStr2 = letterInStr2 + oldPath[1]

        if (iLetterInStr2 < oldPath[1]) continue

        if (oldPath[0] + 1 > max[0]) max = [oldPath[0] + 1, iLetterInStr2 + plus]

        newPaths.push([oldPath[0] + 1, iLetterInStr2 + plus])
      }

      // console.log(newPaths)

      newTableVal = newTableVal.concat(newPaths)
    }

    // console.log(newTableVal)

    table[iStr1 + 1] = newTableVal
  }

  // console.log(table)

  return max[0]
}

console.log(overlapSubsequence("dogs", "daogt")) // -> 3
console.log(overlapSubsequence("dogt", "datog")) // -> 3
console.log(overlapSubsequence("xcyats", "criaotsi")) // -> 4
console.log(overlapSubsequence("vese", "esve")) // -> 3
console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")) // -> 5

console.log(overlapSubsequence("eeeeeeeeeeee", "feeer")) // -> 3
console.log(overlapSubsequence("xfeeeeever", "feeeuavoeqr")) // -> 7
console.log(overlapSubsequence("edee", "ee")) // -> 2

//console.log(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
// console.log(overlapSubsequence("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15
