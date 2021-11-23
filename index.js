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

class Stats {
  constructor(prevRound, thisRound, nextRound) {

    this.thisRound = thisRound
    this.prevRound = prevRound
    this.nextRound = nextRound

    this.prevRoundStats = {
      wcPts : {
        VER : parseFloat(document.querySelector(`#${this.prevRound} #wcPtsVER`).innerHTML), 
        HAM : parseFloat(document.querySelector(`#${this.prevRound} #wcPtsHAM`).innerHTML),
      },
    }

    this.thisRoundStats = {
      racePos : { 
        VER : document.querySelector(`#${this.thisRound} #racePosVER`).value,
        HAM : document.querySelector(`#${this.thisRound} #racePosHAM`).value,
      },
      fastLap : {
        VER : document.querySelector(`#${this.thisRound} #fastestLapVER`).checked,
        HAM : document.querySelector(`#${this.thisRound} #fastestLapHAM`).checked,
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

  get prevWcPtsVER() {
    return this.prevRoundStats.wcPts.VER
  }
  get prevWcPtsHAM() {
    return this.prevRoundStats.wcPts.HAM
  }

  get newWcPtsVER() {
    return this.racePtsVER + this.prevWcPtsVER
  } 
  get newWcPtsHAM() {
    return this.racePtsHAM + this.prevWcPtsHAM
  }

  printStats() {
    document.querySelector(`#${this.thisRound} #racePtsVER`).innerHTML = this.racePtsVER
    document.querySelector(`#${this.thisRound} #racePtsHAM`).innerHTML = this.racePtsHAM
    
    document.querySelector(`#${this.thisRound} #wcPtsVER`).innerHTML = this.newWcPtsVER
    document.querySelector(`#${this.thisRound} #wcPtsHAM`).innerHTML = this.newWcPtsHAM

    // Upcoming Round
    if (this.nextRound !== '') {
      document.querySelector(`#${this.nextRound} #wcPtsVER`).innerHTML = this.newWcPtsVER
      document.querySelector(`#${this.nextRound} #wcPtsHAM`).innerHTML = this.newWcPtsHAM
    }

    if ((this.newWcPtsVER - this.newWcPtsHAM) >= 26) {
      document.querySelector(`#${this.thisRound} #wcDefVER`).innerHTML = "Ja"
      document.querySelector(`#${this.thisRound} #wcDefHAM`).innerHTML = "Nee"

      // Upcoming Round
      if (this.nextRound !== '') {
        document.querySelector(`#${this.nextRound} #wcDefVER`).innerHTML = "Ja"
        document.querySelector(`#${this.nextRound} #wcDefHAM`).innerHTML = "Nee"
      }

    } else if ((this.newWcPtsVER - this.newWcPtsHAM) < 26) {
      document.querySelector(`#${this.thisRound} #wcDefVER`).innerHTML = "Onbeslist"
      document.querySelector(`#${this.thisRound} #wcDefHAM`).innerHTML = "Onbeslist"

      // Upcoming Round
      if (this.nextRound !== '') {
        document.querySelector(`#${this.nextRound} #wcDefVER`).innerHTML = "Onbeslist"
        document.querySelector(`#${this.nextRound} #wcDefHAM`).innerHTML = "Onbeslist"
      }
    }
  }

}


window.addEventListener("load", function() {
  const allStats = new Stats("R20", "R21", "R22")
  allStats.printStats()
})

document.querySelector("#R21").addEventListener("change", function() {  
  const allStats = new Stats("R20", "R21", "R22")
  allStats.printStats()

  console.log(allStats)
})

document.querySelector("#R22").addEventListener("change", function() {  
  const allStats = new Stats("R21", "R22", "")
  allStats.printStats()

  console.log(allStats)
})
