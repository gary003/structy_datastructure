/*
most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.
You can assume that the input string is non-empty.
*/

const mostFrequentChar = (s) => {
  const dico = {}

  for (let letter of s.split("")) {
    if (!(letter in dico)) dico[letter] = 0
    dico[letter] += 1
  }

  const maxOccurence = Object.entries(dico).reduce((acc, val) => {
    return val[1] > acc ? val[1] : acc
  }, 0)

  const result = Object.entries(dico).find((e) => e[1] === maxOccurence)

  return result[0]
}

console.log(mostFrequentChar("bookeeper")) // -> 'e'
console.log(mostFrequentChar("david")) // -> 'd'
console.log(mostFrequentChar("abby")) // -> 'b'
console.log(mostFrequentChar("mississippi")) // -> 'i'
console.log(mostFrequentChar("potato")) // -> 'o'
console.log(mostFrequentChar("eleventennine")) // -> 'e'
console.log(mostFrequentChar("riverbed")) // -> 'r'
