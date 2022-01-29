/*
tolerant teams
Write a function, tolerantTeams, that takes in an array of rivalries as an argument. 
A rivalry is a pair of people who should not be placed on the same team. 
The function should return a boolean indicating whether or not it is possible to separate people into two teams, 
  without rivals being on the same team. 
The two teams formed do not have to be the same size.
*/

const tolerantTeams = (rivalries) => {
  const allPlayers = [...new Set(rivalries.flat())].map((player) => [player, null])
  allPlayers[0][1] = 0

  const placedPlayer = new Set()

  // console.log(allPlayers)
  const queue = [...allPlayers]

  while (queue.length > 0) {
    const [currentPlayer, playerTeam] = queue.shift()

    if (placedPlayer.has(currentPlayer)) continue
    placedPlayer.add(currentPlayer)

    const allRivals = rivalries.filter((r) => r.includes(currentPlayer)).map((rs) => rs.filter((name) => name !== currentPlayer)[0])
    // console.log({currentPlayer, allRivals})

    for (let playerRival of allRivals) {
      const foundR = allPlayers.findIndex((player) => player[0] === playerRival)

      let wrongTeamValuesFlag = false

      if (allPlayers[foundR][1] === null) {
        const rivalTeam = rivalries.reduce((acc, play2) => {
          if (!play2.includes(playerRival)) return acc
          const rivalName = play2.filter((x) => x !== playerRival)[0]
          // console.log({ rivalName, play2, playerRival, allPlayers })
          const foundRivalTeam = allPlayers.find((p) => p[0] === rivalName)[1]
          return foundRivalTeam !== null ? acc.add(foundRivalTeam) : acc
        }, new Set())

        if (rivalTeam.size === 2) wrongTeamValuesFlag = true

        if (rivalTeam.size === 0) allPlayers[foundR][1] = (playerTeam + 1) % 2
        else allPlayers[foundR][1] = ([...rivalTeam][0] + 1) % 2
      }

      if (allPlayers[foundR][1] === playerTeam || wrongTeamValuesFlag) return false

      queue.push([playerRival, (playerTeam + 1) % 2])
    }
  }

  return true
}

const team1 = [
  ["philip", "seb"],
  ["raj", "nader"]
]
console.log(tolerantTeams(team1)) // -> true

const team2 = [
  ["philip", "seb"],
  ["raj", "nader"],
  ["raj", "philip"],
  ["seb", "raj"]
]
console.log(tolerantTeams(team2)) // -> false

const team3 = [
  ["cindy", "anj"],
  ["alex", "matt"],
  ["alex", "cindy"],
  ["anj", "matt"],
  ["brando", "matt"]
]
console.log(tolerantTeams(team3)) // -> true

const team4 = [
  ["alex", "anj"],
  ["alex", "matt"],
  ["alex", "cindy"],
  ["anj", "matt"],
  ["brando", "matt"]
]
console.log(tolerantTeams(team4)) // -> false

const team5 = [
  ["alan", "jj"],
  ["betty", "richard"],
  ["jj", "simcha"],
  ["richard", "christine"]
]
console.log(tolerantTeams(team5)) // -> true

const team6 = [
  ["alan", "jj"],
  ["betty", "richard"],
  ["jj", "simcha"],
  ["richard", "christine"]
]
console.log(tolerantTeams(team6)) // -> true

const team7 = [
  ["alan", "jj"],
  ["jj", "richard"],
  ["betty", "richard"],
  ["jj", "simcha"],
  ["richard", "christine"]
]
console.log(tolerantTeams(team7)) // -> true

const team8 = [
  ["alan", "jj"],
  ["betty", "richard"],
  ["betty", "christine"],
  ["jj", "simcha"],
  ["richard", "christine"]
]
console.log(tolerantTeams(team8)) // -> false

// const tolerantTeams = (rivalries) => {
//   const graph = buildGraph(rivalries)

//   const coloring = {}
//   for (let node in graph) {
//     if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
//       return false
//     }
//   }

//   return true
// }

// const isBipartite = (graph, node, coloring, currentColor) => {
//   if (node in coloring) return coloring[node] === currentColor

//   coloring[node] = currentColor

//   for (let neighbor of graph[node]) {
//     if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
//       return false
//     }
//   }

//   return true
// }

// const buildGraph = (rivalries) => {
//   const graph = {}
//   for (let pair of rivalries) {
//     const [a, b] = pair
//     if (!(a in graph)) graph[a] = []
//     if (!(b in graph)) graph[b] = []
//     graph[a].push(b)
//     graph[b].push(a)
//   }

//   return graph
// }

// // e = number of rivalries
// // n = number of people
// // Time: O(e)
// // Space: O(n)
