/*
token transform
Write a function, tokenTransform, that takes in an object of tokens and a string. 
In the object, the replacement values for a token may reference other tokens. 
The function should return a new string where tokens are replaced with their fully evaluated string values.
Tokens are enclosed in a pair of '$'.
You may assume that their are no circular token dependencies.
*/

const tokenTransform = (s, tokens, memo = {}) => {
  if (s in memo) return memo[s]
  const result = []
  let [i, j] = [0, 1]

  while (i < s.length) {
    if (s[i] !== "$") {
      result.push(s[i])
      i += 1
      j = i + 1
    } else if (s[j] !== "$") {
      j += 1
    } else {
      const token = s.slice(i, j + 1)
      const tokenR = tokens[token]
      const tokenValue = tokenTransform(tokenR, tokens, memo)

      result.push(tokenValue)

      // console.log(tokenValue, tokenR, i, j)
      i = j + 1
      j += 2
    }
  }

  memo[s] = result.join("")
  return memo[s]
}

/* RegExp are dangerous and slow !! */
// const tokenReplace = (s, tokens) => s.replaceAll(/\$\w+\$/g, (x) => tokens[x])

// const tokenTransform = (s, tokens) => {
//   const newString = tokenReplace(s, tokens)
//   console.log(newString)
//   if (newString === s) return s
//   return tokenTransform(newString, tokens)
// }

const tokens1 = {
  $LOCATION$: "$ANIMAL$ park",
  $ANIMAL$: "dog"
}
console.log(tokenTransform("Walk the $ANIMAL$ in the $LOCATION$!", tokens1)) // -> 'Walk the dog in the dog park!'

const tokens2 = {
  $ADJECTIVE_1$: "quick",
  $ADJECTIVE_2$: "eager",
  $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
  $VERB$: "hopped $DIRECTION$",
  $DIRECTION$: "North"
}
console.log(tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens2)) // -> 'the quick fox quickly and eagerly hopped Northward'

const tokens3 = {
  $B$: "epicly $C$",
  $A$: "pretty $B$ problem $D$",
  $D$: "we have",
  $C$: "clever"
}
console.log(tokenTransform("What a $A$ here!", tokens3)) // -> 'What a pretty epicly clever problem we have here!'

const tokens4 = {
  $1$: "a$2$",
  $2$: "b$3$",
  $3$: "c$4$",
  $4$: "d$5$",
  $5$: "e$6$",
  $6$: "f!"
}
console.log(tokenTransform("$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$", tokens4)) // -> 'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!'

const tokens5 = {
  $0$: "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
  $1$: "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
  $2$: "$3$$3$$3$$3$$3$$3$$3$",
  $3$: "$4$$4$$4$$4$$4$$4$",
  $4$: "$5$$5$$5$$5$$5$",
  $5$: "$6$$6$$6$$6$",
  $6$: "$7$$7$$7$",
  $7$: "$8$$8$",
  $8$: ""
}
console.time("zz1")
console.log(tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens5)) // -> 'zzzzzzz'
console.timeEnd("zz1")

const tokens6 = {
  $0$: "$1$$1$$1$",
  $1$: "$8$$8$",
  $8$: ""
}
console.time("zz")
console.log(tokenTransform("z$0$z", tokens6)) // -> 'zz'
console.timeEnd("zz")

// const tokenTransform = (s, tokens) => {
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
//       const value = tokens[key]
//       const evaluatedValue = tokenTransform(value, tokens)
//       tokens[key] = evaluatedValue
//       output.push(evaluatedValue)
//       i = j + 1
//       j = i + 1
//     }
//   }

//   return output.join("")
// }

// // n = length of longest string of value
// // m = # of unique tokens
// // Time: ~O(n^m)
// // Space: ~O(n^m)
