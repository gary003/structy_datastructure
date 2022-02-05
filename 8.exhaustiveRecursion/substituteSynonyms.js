/*
substituting synonyms
Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments. 
The object contains words as keys whose values are arrays containing synonyms. 
The function should return an array containing all possible sentences that can be formed by substituting words of the sentence with their synonyms.
You may return the possible sentences in any order, as long as you return all of them.
*/

const replaceSynonyme = (synonym, synonyms, sentences) => {
  const newStrs = []

  for (let currentSentence of sentences[sentences.length - 1]) {
    // console.log(currentSentence)
    for (let syn of synonyms[synonym]) {
      const synonymRegExp = new RegExp(`${synonym}\\s|\\s${synonym}`)
      const str2 = currentSentence.replace(synonymRegExp, (x) => x.replace(synonym, syn))
      newStrs.push(str2.trim())
    }
  }

  sentences.push(newStrs)

  if (sentences[sentences.length - 1][0].match(synonym)) return replaceSynonyme(synonym, synonyms, sentences)

  return sentences[sentences.length - 1]
}

const substituteSynonyms = (sentence, synonyms, sentencesArray = [[sentence]]) => {
  for (let keySynonym of Object.keys(synonyms)) {
    replaceSynonyme(keySynonym, synonyms, sentencesArray)
  }

  return sentencesArray[sentencesArray.length - 1]
}

// console.log(replaceSynonyme("follow", { follow: ["chase", "pursue"] }, [["follow me, don't follow him"]]))

const sentence1 = "follow the yellow brick road"
const synonyms1 = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"]
}
console.log(substituteSynonyms(sentence1, synonyms1))
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]

const sentence2 = "I think it's gonna be a long long time"
const synonyms2 = {
  think: ["believe", "reckon"],
  long: ["lengthy", "prolonged"]
}
console.log(substituteSynonyms(sentence2, synonyms2))
// [
//   "I believe it's gonna be a lengthy lengthy time",
//   "I believe it's gonna be a lengthy prolonged time",
//   "I believe it's gonna be a prolonged lengthy time",
//   "I believe it's gonna be a prolonged prolonged time",
//   "I reckon it's gonna be a lengthy lengthy time",
//   "I reckon it's gonna be a lengthy prolonged time",
//   "I reckon it's gonna be a prolonged lengthy time",
//   "I reckon it's gonna be a prolonged prolonged time"
// ]

const sentence3 = "palms sweaty knees weak arms heavy"
const synonyms3 = {
  palms: ["hands", "fists"],
  heavy: ["weighty", "hefty", "burdensome"],
  weak: ["fragile", "feeble", "frail", "sickly"]
}
console.log(substituteSynonyms(sentence3, synonyms3))
// [
//   'hands sweaty knees fragile arms weighty',
//   'hands sweaty knees fragile arms hefty',
//   'hands sweaty knees fragile arms burdensome',
//   'hands sweaty knees feeble arms weighty',
//   'hands sweaty knees feeble arms hefty',
//   'hands sweaty knees feeble arms burdensome',
//   'hands sweaty knees frail arms weighty',
//   'hands sweaty knees frail arms hefty',
//   'hands sweaty knees frail arms burdensome',
//   'hands sweaty knees sickly arms weighty',
//   'hands sweaty knees sickly arms hefty',
//   'hands sweaty knees sickly arms burdensome',
//   'fists sweaty knees fragile arms weighty',
//   'fists sweaty knees fragile arms hefty',
//   'fists sweaty knees fragile arms burdensome',
//   'fists sweaty knees feeble arms weighty',
//   'fists sweaty knees feeble arms hefty',
//   'fists sweaty knees feeble arms burdensome',
//   'fists sweaty knees frail arms weighty',
//   'fists sweaty knees frail arms hefty',
//   'fists sweaty knees frail arms burdensome',
//   'fists sweaty knees sickly arms weighty',
//   'fists sweaty knees sickly arms hefty',
//   'fists sweaty knees sickly arms burdensome'
// ]

// const substituteSynonyms = (sentence, synonyms) => {
//   const words = sentence.split(" ")
//   const arrays = generate(words, synonyms)
//   return arrays.map((subarray) => subarray.join(" "))
// }

// const generate = (words, synonyms) => {
//   if (words.length === 0) return [[]]

//   const firstWord = words[0]
//   const remainingWords = words.slice(1)
//   if (firstWord in synonyms) {
//     const result = []
//     const subarrays = generate(remainingWords, synonyms)
//     for (let synonym of synonyms[firstWord]) {
//       result.push(...subarrays.map((subarray) => [synonym, ...subarray]))
//     }
//     return result
//   } else {
//     const subarrays = generate(remainingWords, synonyms)
//     return subarrays.map((subarray) => [firstWord, ...subarray])
//   }
// }

// // n = number of words in sentence
// // m = max number of synonyms for a word
// // Time: ~O(m^n)
// // Space: ~O(m^n)
