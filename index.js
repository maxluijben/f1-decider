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
        VER : parseFloat(document.querySelector(`#R${this.prevRound} [data-ref="wcPtsVER"]`).innerHTML), 
        HAM : parseFloat(document.querySelector(`#R${this.prevRound} [data-ref="wcPtsHAM"]`).innerHTML),
      },
    }

    this.thisRoundStats = {
      racePos : { 
        VER : document.querySelector(`#R${this.thisRound} [data-ref="racePosVER"]`).value,
        HAM : document.querySelector(`#R${this.thisRound} [data-ref="racePosHAM"]`).value,
      },
      fastLap : {
        VER : document.querySelector(`#R${this.thisRound} [data-ref="fastestLapVER"]`).checked,
        HAM : document.querySelector(`#R${this.thisRound} [data-ref="fastestLapHAM"]`).checked,
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
    document.querySelector(`#R${this.thisRound} [data-ref="racePtsVER"]`).innerHTML = this.racePtsVER
    document.querySelector(`#R${this.thisRound} [data-ref="racePtsHAM"]`).innerHTML = this.racePtsHAM

    // Calculate stats for current and all upcoming rounds
    rounds.slice(this.thisRound - 1).forEach(round => {
      console.log('round', round)

      // WC Points calculation
      const prevWcPtsVER = parseFloat(document.querySelector(`#R${round - 1} [data-ref="wcPtsVER"]`).innerHTML)
      const prevWcPtsHAM = parseFloat(document.querySelector(`#R${round - 1} [data-ref="wcPtsHAM"]`).innerHTML)
      
      const racePtsVER = parseFloat(document.querySelector(`#R${round} [data-ref="racePtsVER"]`).innerHTML)
      const racePtsHAM = parseFloat(document.querySelector(`#R${round} [data-ref="racePtsHAM"]`).innerHTML)

      const wcPtsVER = prevWcPtsVER + racePtsVER
      const wcPtsHAM = prevWcPtsHAM + racePtsHAM

      document.querySelector(`#R${round} [data-ref="wcPtsVER"]`).innerHTML = wcPtsVER
      document.querySelector(`#R${round} [data-ref="wcPtsHAM"]`).innerHTML = wcPtsHAM
      

      // WC decider
      const roundsLeft = rounds.length - round
      const wcPointsDelta = roundsLeft * 25 + 1

      console.log('prev round', round - 1)
      console.log('total rounds', rounds.length)
      console.log('rounds to go', roundsLeft)
      console.log('required WC points delta', wcPointsDelta)

      if (wcPtsVER - wcPtsHAM >= wcPointsDelta) {
        document.querySelector(`#R${round} [data-ref="wcDefVER"]`).innerHTML = "Ja"
        document.querySelector(`#R${round} [data-ref="wcDefHAM"]`).innerHTML = "Nee"
      } else if (wcPtsHAM - wcPtsVER >= wcPointsDelta) {
        document.querySelector(`#R${round} [data-ref="wcDefVER"]`).innerHTML = "Nee"
        document.querySelector(`#R${round} [data-ref="wcDefHAM"]`).innerHTML = "Ja"
      } else if (wcPtsHAM - wcPtsVER == 0) {
        document.querySelector(`#R${round} [data-ref="wcDefVER"]`).innerHTML = "Ja"
        document.querySelector(`#R${round} [data-ref="wcDefHAM"]`).innerHTML = "Nee"
      } else if (wcPtsVER - wcPtsHAM < wcPointsDelta) {
        document.querySelector(`#R${round} [data-ref="wcDefVER"]`).innerHTML = "NTB"
        document.querySelector(`#R${round} [data-ref="wcDefHAM"]`).innerHTML = "NTB"
      }

    })


    // document.querySelector(`#R${this.thisRound} #racePtsVER`).innerHTML = this.racePtsVER
    // document.querySelector(`#R${this.thisRound} #racePtsHAM`).innerHTML = this.racePtsHAM
    
    // document.querySelector(`#R${this.thisRound} #wcPtsVER`).innerHTML = this.newWcPtsVER
    // document.querySelector(`#R${this.thisRound} #wcPtsHAM`).innerHTML = this.newWcPtsHAM

    // Upcoming Round
    // if (this.nextRound != '') {
    //   document.querySelector(`#R${this.nextRound} #wcPtsVER`).innerHTML = this.newWcPtsVER
    //   document.querySelector(`#R${this.nextRound} #wcPtsHAM`).innerHTML = this.newWcPtsHAM
    // }

    // if ((this.newWcPtsVER - this.newWcPtsHAM) >= 26) {
    //   document.querySelector(`#R${this.thisRound} #wcDefVER`).innerHTML = "Ja"
    //   document.querySelector(`#R${this.thisRound} #wcDefHAM`).innerHTML = "Nee"

    //   // Upcoming Round
    //   if (this.nextRound != '') {
    //     document.querySelector(`#R${this.nextRound} #wcDefVER`).innerHTML = "Ja"
    //     document.querySelector(`#R${this.nextRound} #wcDefHAM`).innerHTML = "Nee"
    //   }

    // } else if ((this.newWcPtsVER - this.newWcPtsHAM) < 26) {
    //   document.querySelector(`#R${this.thisRound} #wcDefVER`).innerHTML = "Onbeslist"
    //   document.querySelector(`#R${this.thisRound} #wcDefHAM`).innerHTML = "Onbeslist"

    //   // Upcoming Round
    //   if (this.nextRound != '') {
    //     document.querySelector(`#R${this.nextRound} #wcDefVER`).innerHTML = "Onbeslist"
    //     document.querySelector(`#R${this.nextRound} #wcDefHAM`).innerHTML = "Onbeslist"
    //   }
    // }
  }

}


window.addEventListener("load", function() {
  const allStats = new Stats(21)
  allStats.printStats()
})

document.querySelector("#R21").addEventListener("change", function() {  
  const allStats = new Stats(21)
  allStats.printStats()

  console.log(allStats)
})

document.querySelector("#R22").addEventListener("change", function() {  
  const allStats = new Stats(22)
  allStats.printStats()

  console.log(allStats)
})
