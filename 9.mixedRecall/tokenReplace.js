/*
token replace
Write a function, tokenReplace, that takes in an object of tokens and a string. 
The function should return a new string where tokens are replaced.
Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted. 
Tokens should be replaced from left to right in the string (see test_05).
*/

const tokenReplace = (s, tokens) => s.replace(/\$\w+\$/g, (x) => tokens[x])

const tokens1 = {
  $LOCATION$: "park",
  $ANIMAL$: "dog"
}
console.log(tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens1)) // -> 'Walk the dog in the park!'

const tokens2 = {
  $ADJECTIVE$: "quick",
  $VERB$: "hopped",
  $DIRECTION$: "North"
}
console.log(tokenReplace("the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward", tokens2)) // -> 'the quick fox hopped quickly Northward'

const tokens3 = {
  $greeting$: "hey programmer"
}
console.log(tokenReplace("his greeting is always $greeting$.", tokens3)) // -> 'his greeting is always hey programmer.'

const tokens4 = {
  $A$: "lions",
  $B$: "tigers",
  $C$: "bears"
}
console.log(tokenReplace("$A$$B$$C$, oh my.", tokens4)) // -> 'lionstigersbears, oh my.'

const tokens5 = {
  $A$: "lions",
  $B$: "tigers",
  $C$: "bears"
}
console.log(tokenReplace("$B$", tokens5)) // -> 'tigers'

const tokens6 = {
  $second$: "beta",
  $first$: "alpha",
  $third$: "gamma"
}
console.log(tokenReplace("$first$second$third$", tokens6)) // -> 'alphasecondgamma'

// /* using two pointers */
// const tokenReplace = (s, tokens) => {
//   let output = []

//   let i = 0
//   let j = 1
//   while (i < s.length) {
//     if (s[i] !== "$") {
//       output.push(s[i])
//       i += 1
//       j = i + 1
//     } else if (s[j] !== "$") {
//       j += 1
//     } else {
//       const key = s.slice(i, j + 1)
//       output.push(tokens[key])
//       i = j + 1
//       j = i + 1
//     }
//   }

//   return output.join("")
// }

// // n = length of string
// // Time: O(n)
// // Space: O(n)
