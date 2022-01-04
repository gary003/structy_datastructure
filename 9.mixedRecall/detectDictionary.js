/*
detect dictionary
Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. 
The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.
You can assume that all characters are lowercase a-z.
You can assume that the alphabet contains all 26 letters.
*/

const lexicalOrder = (word1, word2, alphabet) => {
  for (let iChar = 0; iChar < word1.length; iChar += 1) {
    const idx1 = alphabet.indexOf(word1.charAt(iChar))
    const idx2 = alphabet.indexOf(word2.charAt(iChar))
    // console.log(idx1,idx2)
    if (idx1 < idx2) return -1
    if (idx1 > idx2) return 1
  }

  return -1
}

const detectDictionary = (dictionary, alphabet) => {
  const originalDico = [...dictionary]
  const sortedDico = dictionary.sort((w1, w2) => {
    return lexicalOrder(w1, w2, alphabet)
  })

  // console.log(dictionary, sortedDico)

  return sortedDico.join("-") === originalDico.join("-")
}

const dictionary1 = ["zoo", "tick", "tack", "door"]
const alphabet1 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(detectDictionary(dictionary1, alphabet1)) // -> true

const dictionary23 = ["zoo", "tack", "tick", "door"]
const alphabet23 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(detectDictionary(dictionary23, alphabet23)) // -> false

const dictionary3 = ["zoos", "zoo", "tick", "tack", "door"]
const alphabet3 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(detectDictionary(dictionary3, alphabet3)) // -> false

const dictionary4 = ["miles", "milestone", "proper", "process", "goal"]
const alphabet4 = "mnoijpqrshkltabcdefguvwzxy"
console.log(detectDictionary(dictionary4, alphabet4)) // -> true

const dictionary5 = ["miles", "milestone", "pint", "proper", "process", "goal"]
const alphabet5 = "mnoijpqrshkltabcdefguvwzxy"
console.log(detectDictionary(dictionary5, alphabet5)) // -> true

const dictionary6 = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"]
const alphabet6 = "mnoijpqrshkltabcdefguvwzxy"
console.log(detectDictionary(dictionary6, alphabet6)) // -> false
