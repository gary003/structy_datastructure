/*
lexical order
Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. 
The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. 
If the second word should appear first, then return false.

Note that the alphabet string may be any arbitrary string.
Intuitively, Lexical Order is like "dictionary" order:
You can assume that all characters are lowercase a-z.
You can assume that the alphabet contains all 26 letters.
*/

const lexicalOrder = (word1, word2, alphabet) => {
  for (let iChar = 0; iChar < word1.length; iChar += 1) {
    const idx1 = alphabet.indexOf(word1.charAt(iChar))
    const idx2 = alphabet.indexOf(word2.charAt(iChar))
    // console.log(idx1,idx2)
    if (idx1 < idx2) return true
    if (idx1 > idx2) return false
  }

  return true
}

const alphabet1 = "abcdefghijklmnopqrstuvwxyz"
console.log(lexicalOrder("apple", "dock", alphabet1)) // -> true

const alphabet2 = "abcdefghijklmnopqrstuvwxyz"
console.log(lexicalOrder("apple", "ample", alphabet2)) // -> false

const alphabet3 = "abcdefghijklmnopqrstuvwxyz"
console.log(lexicalOrder("app", "application", alphabet3)) // -> true

const alphabet4 = "abcdefghijklmnopqrstuvwxyz"
console.log(lexicalOrder("backs", "backdoor", alphabet4)) // -> false

const alphabet5 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(lexicalOrder("zoo", "dinner", alphabet5)) // -> true

const alphabet6 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(lexicalOrder("leaper", "leap", alphabet6)) // -> false

const alphabet7 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(lexicalOrder("backs", "backdoor", alphabet7)) // -> true

const alphabet8 = "ghzstijbacdopnfklmeqrxyuvw"
console.log(lexicalOrder("semper", "semper", alphabet8)) // -> true
