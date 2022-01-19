/*
combine intervals
Write a function, combineIntervals, that takes in an array of intervals as an argument. 
Each interval is an array containing a pair of numbers representing a start and end time. 
Your function should combine overlapping intervals and return an array containing the combined intervals.
*/

const isUselessSeq = (arr, seq) => {
  for (let s of arr) {
    if (s.join("-") === seq.join("-")) continue
    if (s[0] <= seq[0] && s[s.length - 1] >= seq[seq.length - 1]) return true
  }
  return false
}

const combineIntervals = (intervals) => {
  const allSeqs = []
  for (let iInter = 0; iInter < intervals.length; iInter += 1) {
    const lengthOfInterval = intervals[iInter][1] - intervals[iInter][0]
    const seq = Array(lengthOfInterval + 1)
      .fill(0)
      .map((_, i) => {
        return i + intervals[iInter][0]
      })

    allSeqs.push(seq)
  }

  // console.log({ allSeqs })

  const resultsRaw = new Set()
  for (let iSeq = 0; iSeq < allSeqs.length; iSeq += 1) {
    let merged = []
    for (let iSeq2 = iSeq; iSeq2 < allSeqs.length; iSeq2 += 1) {
      // console.log(allSeqs.slice(0,iSeq).concat(allSeqs.slice(iSeq + 1)), iSeq)
      if (allSeqs[iSeq].some((val) => allSeqs[iSeq2].includes(val))) {
        allSeqs[iSeq2] = [...new Set([...allSeqs[iSeq], ...allSeqs[iSeq2]])].sort((a, b) => a - b)
        merged = allSeqs[iSeq2]
      }
    }

    resultsRaw.add(merged.join("-"))
  }

  const results = [...resultsRaw].map((x) => x.split("-").map(Number)).map((x) => [x[0], x[x.length - 1]])

  const resultsClean = results.filter((val) => {
    return !isUselessSeq(results, val)
  })

  // console.log(results, resultsClean)

  return resultsClean
}

const intervals1 = [
  [1, 4],
  [12, 15],
  [3, 7],
  [8, 13]
]
console.log(combineIntervals(intervals1)) // -> [ [1, 7], [8, 15] ]

const intervals2 = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24]
]
console.log(combineIntervals(intervals2)) // -> [ [2, 9], [10, 12], [20, 24] ]

const intervals3 = [
  [3, 7],
  [5, 8],
  [1, 5]
]
console.log(combineIntervals(intervals3)) // -> [ [1, 8] ]

const intervals4 = [
  [3, 7],
  [10, 13],
  [5, 8],
  [27, 31],
  [1, 5],
  [12, 16],
  [20, 22]
]
console.log(combineIntervals(intervals4)) // -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]

const intervals5 = [
  [3, 7],
  [10, 13],
  [5, 8],
  [27, 31],
  [1, 5],
  [12, 16],
  [20, 32]
]
console.log(combineIntervals(intervals5)) // -> [ [1, 8], [10, 16], [20, 32] ]

const intervals6 = [
  [64, 70],
  [50, 55],
  [62, 65],
  [12, 50],
  [72, 300000]
]
console.log(combineIntervals(intervals6)) // -> [ [12, 55], [62, 70], [72, 300000] ]

/*
const combineIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
  const combined = [intervals[0]]
  for (let currentInterval of sortedIntervals.slice(1)) {
    const lastInterval = combined[combined.length - 1]
    const [lastStart, lastEnd] = lastInterval
    const [currentStart, currentEnd] = currentInterval
    if (currentStart <= lastEnd) {
      if (currentEnd > lastEnd) {
        lastInterval[1] = currentEnd
      }
    } else {
      combined.push(currentInterval)
    }
  }
  return combined
}
*/
