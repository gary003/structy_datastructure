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

  for (let iLetter = 0; iLetter < str1.length; iLetter += 1) {
    if (str2.indexOf(str1[iLetter]) === -1) {
      table[iLetter + 1] = table[iLetter]
      continue
    }

    let newTableVal = []
    for (let iTableVal = 0; iTableVal < table.length; iTableVal += 1) {
      // console.log(tableVal)

      let newPaths = []
      for (let oldPath of table[iTableVal]) {
        // console.log(oldPath, str1[iTableVal + 1])

        const plus = str1[iLetter] === str1[iTableVal + 1] ? 1 : 0

        let letterInStr2 = str2.slice(oldPath[1]).indexOf(str1[iLetter])
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

    table[iLetter + 1] = newTableVal
  }

  console.log(table)

  return max[0]
}

// console.log(overlapSubsequence("dogs", "daogt")) // -> 3
// console.log(overlapSubsequence("dogt", "datog")) // -> 3
// console.log(overlapSubsequence("xcyats", "criaotsi")) // -> 4
// console.log(overlapSubsequence("vese", "esve")) // -> 3
// console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")) // -> 5

// console.log(overlapSubsequence("eeeeeeeeeeee", "feeer")) // -> 3
// console.log(overlapSubsequence("xfeeeeever", "feeeuavoeqr")) // -> 7

console.log(overlapSubsequence("edee", "ee")) // -> 2

// console.log(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
// console.log(overlapSubsequence("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15
