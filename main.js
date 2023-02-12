function generateRandomNumber(num) {
   return Math.floor(Math.random() * num)
}

const player = {
   playerInfo: ["player 1", "player 2", "player 3", "player 4"],
   playerAction: ["uses potion", "took damage", "blocks attack"],
   playerHealth: ["increase health", "decreses health", "current health"]
}

// 
let currentPlayerInfo = []

for(let play in player) {
   let playerRandomizer = generateRandomNumber(player[play].length)

   switch(play) {
      case "playerInfo":
         currentPlayerInfo.push(`${player[play][playerRandomizer]}`)
         break
      case "playerAction":
         currentPlayerInfo.push(`${player[play][playerRandomizer]}`)
         break
      case "playerHealth":
         currentPlayerInfo.push(`${player[play][playerRandomizer]}`)
         break
      default:
         currentPlayerInfo.push('Error not enough information')
   }
}

function formatPlayer(plays) {
   const format = currentPlayerInfo.join(' ')
   console.log(format)
}

formatPlayer(currentPlayerInfo);