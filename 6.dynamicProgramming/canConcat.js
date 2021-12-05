/*
can concat
Write a function, canConcat, that takes in a string and an array of words as arguments. 
The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
You may reuse words of the array as many times as needed.
*/

const canConcat = (s, words) => {
  const table = Array(s.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i < s.length; i += 1) {
    if (table[i] !== false) {
      const validSubWords = words.filter((suffix) => s.slice(i).indexOf(suffix) == 0)
      for (let validWord of validSubWords) {
        table[validWord.length + i] = true
      }
    }
  }

  return table[s.length]
}

console.log(canConcat("oneisnone", ["on", "e", "is"])) // -> false
console.log(canConcat("oneisnone", ["on", "e", "is", "n"])) // -> true
console.log(canConcat("santahat", ["santah", "hat"])) // -> false
console.log(canConcat("santahat", ["santah", "san", "hat", "tahat"])) // -> true
console.log(canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"])) // -> false
