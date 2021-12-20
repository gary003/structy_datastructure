/*
overlap subsequence
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
*/

const overlapSubsequence = (str1, str2) => {
  const table = Array(str1.length)
    .fill(null)
    .map((_) => [])

  for (let iLetter = 0; iLetter < str1.length; iLetter += 1) {
    if (str2.indexOf(str1[iLetter]) === -1) continue
    // console.log(indexLetterStr2)

    for (let iSub = iLetter; iSub > 0; iSub -= 1) {
      const newSub = table[iSub - 1].reduce((acc, val) => {
        const lastLetterOfVal = val[val.length - 1]

        let indexLetterStr2 = str2.slice(lastLetterOfVal[1]).indexOf(str1[iLetter]) + lastLetterOfVal[1]

        if (indexLetterStr2 < lastLetterOfVal[1]) return acc

        // console.log(lastLetterOfVal)
        return acc.concat([val.concat([[str1.charAt(iLetter), indexLetterStr2]])])
      }, [])

      // console.log(newSub)
      table[iSub] = table[iSub].concat(newSub)
    }

    table[0].push([[str1.charAt(iLetter), str2.indexOf(str1[iLetter])]])
  }

  console.log(JSON.stringify(table))

  const results = table.filter((res) => res.length !== 0)

  return results[results.length - 1][0].length
}

console.log(overlapSubsequence("dogt", "datog")) // -> 3
console.log(overlapSubsequence("xcyats", "criaotsi")) // -> 4
console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")) // -> 5
console.log(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")) // -> 11
// console.log(overlapSubsequence("mumblecorebeardleggingsauthenticunicorn", "succulentspughumblemeditationlocavore")) // -> 15
