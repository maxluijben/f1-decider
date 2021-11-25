const ptsLadder = {
  "0" : 0,
  "1" : 25,
  "2" : 18,
  "3" : 15,
  "4" : 12,
  "5" : 10,
  "6" : 8,
  "7" : 6,
  "8" : 4,
  "9" : 2,
  "10" : 1,
  "11" : 0,
}

const rounds = [
  "1", "2", "3", "4", "5", 
  "6", "7", "8", "9", "10", 
  "11", "12", "13", "14", "15", 
  "16", "17", "18", "19", "20", 
  "21", "22",
]

class Stats {
  constructor(thisRound) {

    this.thisRound = thisRound
    this.prevRound = thisRound - 1
    this.nextRound = thisRound + 1

    this.prevRoundStats = {
      wcPts : {
        VER : parseFloat(document.querySelector(`#round_${this.prevRound} [data-ref="wcPtsVER"]`).innerHTML), 
        HAM : parseFloat(document.querySelector(`#round_${this.prevRound} [data-ref="wcPtsHAM"]`).innerHTML),
      },
    }

    this.thisRoundStats = {
      racePos : { 
        VER : document.querySelector(`#round_${this.thisRound} [data-ref="racePosVER"]`).value,
        HAM : document.querySelector(`#round_${this.thisRound} [data-ref="racePosHAM"]`).value,
      },
      fastLap : {
        VER : document.querySelector(`#round_${this.thisRound} [data-ref="fastestLapVER"]`).checked,
        HAM : document.querySelector(`#round_${this.thisRound} [data-ref="fastestLapHAM"]`).checked,
      },
    }
  }
  
  get racePtsVER() {
    if (this.thisRoundStats.fastLap.VER == true && this.thisRoundStats.racePos.VER != 11) {
      return ptsLadder[this.thisRoundStats.racePos.VER] + 1
    } else {
      return ptsLadder[this.thisRoundStats.racePos.VER]
    }
  }
  get racePtsHAM() {
    if (this.thisRoundStats.fastLap.HAM == true && this.thisRoundStats.racePos.HAM != 11) {
      return ptsLadder[this.thisRoundStats.racePos.HAM] + 1
    } else {
      return ptsLadder[this.thisRoundStats.racePos.HAM]
    }
  }

  // get prevWcPtsVER() {
  //   return this.prevRoundStats.wcPts.VER
  // }
  // get prevWcPtsHAM() {
  //   return this.prevRoundStats.wcPts.HAM
  // }

  // get newWcPtsVER() {
  //   return this.racePtsVER + this.prevWcPtsVER
  // } 
  // get newWcPtsHAM() {
  //   return this.racePtsHAM + this.prevWcPtsHAM
  // }

  printStats() {
    document.querySelector(`#round_${this.thisRound} [data-ref="racePtsVER"]`).innerHTML = this.racePtsVER
    document.querySelector(`#round_${this.thisRound} [data-ref="racePtsHAM"]`).innerHTML = this.racePtsHAM

    // Calculate stats for current and all upcoming rounds
    rounds.slice(this.thisRound - 1).forEach(round => {
      console.log('round', round)

      // WC Points calculation
      const prevWcPtsVER = parseFloat(document.querySelector(`#round_${round - 1} [data-ref="wcPtsVER"]`).innerHTML)
      const prevWcPtsHAM = parseFloat(document.querySelector(`#round_${round - 1} [data-ref="wcPtsHAM"]`).innerHTML)
      
      const racePtsVER = parseFloat(document.querySelector(`#round_${round} [data-ref="racePtsVER"]`).innerHTML)
      const racePtsHAM = parseFloat(document.querySelector(`#round_${round} [data-ref="racePtsHAM"]`).innerHTML)

      const wcPtsVER = prevWcPtsVER + racePtsVER
      const wcPtsHAM = prevWcPtsHAM + racePtsHAM

      document.querySelector(`#round_${round} [data-ref="wcPtsVER"]`).innerHTML = wcPtsVER
      document.querySelector(`#round_${round} [data-ref="wcPtsHAM"]`).innerHTML = wcPtsHAM
      
      // WC standings position 
      if (wcPtsVER > wcPtsHAM || wcPtsVER == wcPtsHAM) {
        document.querySelector(`#round_${round} [data-ref="wcPosVER"]`).innerHTML = "1"
        document.querySelector(`#round_${round} [data-ref="wcPosCardVER"]`).classList.remove("p2")
        document.querySelector(`#round_${round} [data-ref="wcPosCardVER"]`).classList.add("p1")
        document.querySelector(`#round_${round} [data-ref="wcPosHAM"]`).innerHTML = "2"
        document.querySelector(`#round_${round} [data-ref="wcPosCardHAM"]`).classList.remove("p1")
        document.querySelector(`#round_${round} [data-ref="wcPosCardHAM"]`).classList.add("p2")
      } else if (wcPtsVER < wcPtsHAM) {
        document.querySelector(`#round_${round} [data-ref="wcPosVER"]`).innerHTML = "2"
        document.querySelector(`#round_${round} [data-ref="wcPosCardVER"]`).classList.remove("p1")
        document.querySelector(`#round_${round} [data-ref="wcPosCardVER"]`).classList.add("p2")
        document.querySelector(`#round_${round} [data-ref="wcPosHAM"]`).innerHTML = "1"
        document.querySelector(`#round_${round} [data-ref="wcPosCardHAM"]`).classList.remove("p2")
        document.querySelector(`#round_${round} [data-ref="wcPosCardHAM"]`).classList.add("p1")
      }


      // WC decider
      const roundsLeft = rounds.length - round
      const wcPointsDelta = roundsLeft * 25 + 1

      console.log('prev round', round - 1)
      console.log('total rounds', rounds.length)
      console.log('rounds to go', roundsLeft)
      console.log('required WC points delta', wcPointsDelta)

      if (wcPtsVER - wcPtsHAM >= wcPointsDelta) {
        document.querySelector(`#round_${round} [data-ref="wcDefVER"]`).innerHTML = "Ja"
        document.querySelector(`#round_${round} [data-ref="wcDefHAM"]`).innerHTML = "Nee"
      } else if (wcPtsHAM - wcPtsVER >= wcPointsDelta) {
        document.querySelector(`#round_${round} [data-ref="wcDefVER"]`).innerHTML = "Nee"
        document.querySelector(`#round_${round} [data-ref="wcDefHAM"]`).innerHTML = "Ja"
      } else if (wcPtsHAM - wcPtsVER == 0) {
        document.querySelector(`#round_${round} [data-ref="wcDefVER"]`).innerHTML = "Ja"
        document.querySelector(`#round_${round} [data-ref="wcDefHAM"]`).innerHTML = "Nee"
      } else if (wcPtsVER - wcPtsHAM < wcPointsDelta) {
        document.querySelector(`#round_${round} [data-ref="wcDefVER"]`).innerHTML = "NTB"
        document.querySelector(`#round_${round} [data-ref="wcDefHAM"]`).innerHTML = "NTB"
      }

    })

  }

}


window.addEventListener("load", function() {
  const allStats = new Stats(21)
  allStats.printStats()
})


/**
 * Calculate and print stats on user input
 */

// find all round tables
const allTables = document.querySelectorAll('[id^="round_"]')
// listen to changes within each round table, so we can calculate and print data when input changes
allTables.forEach(table => {
  table.addEventListener('change', function() {
    // extract round number from id
    const idString = table.id;
    const roundNumber = idString.match(/(\d+)/);
    // if round number has been found
    if (roundNumber) {
      // calculate all stats
      const allStats = new Stats(roundNumber[0])
      // print all stats
      allStats.printStats()
    }
  })
})
