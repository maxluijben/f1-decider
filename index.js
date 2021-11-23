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
  constructor(newRound, prevRound, racePtsCell) {

    this.newRound = newRound
    this.prevRound = prevRound
    this.racePtsCell = racePtsCell

    this.prevRound = {
      wcPts : {
        VER : 351.5, 
        HAM : 343.5, 
      },
    }

    this.newRound = {
      racePos : { 
        VER : document.querySelector('#racePosSauVER').value,
        HAM : document.querySelector('#racePosSauHAM').value,
      },
      fastLap : {
        VER : document.querySelector('#fastestLapSauVER').checked,
        HAM : document.querySelector('#fastestLapSauHAM').checked,
      },
    }
  }
  
  get racePtsVER() {
    if (this.newRound.fastLap.VER == true && this.newRound.racePos.VER != 11) {
      return ptsLadder[this.newRound.racePos.VER] + 1
    } else {
      return ptsLadder[this.newRound.racePos.VER]
    }
  }
  get racePtsHAM() {
    if (this.newRound.fastLap.HAM == true && this.newRound.racePos.HAM != 11) {
      return ptsLadder[this.newRound.racePos.HAM] + 1
    } else {
      return ptsLadder[this.newRound.racePos.HAM]
    }
  }

  get prevWcPtsVER() {
    return this.prevRound.wcPts.VER
  }
  get prevWcPtsHAM() {
    return this.prevRound.wcPts.HAM
  }

  get newWcPtsVER() {
    return this.racePtsVER + this.prevWcPtsVER
  } 
  get newWcPtsHAM() {
    return this.racePtsHAM + this.prevWcPtsHAM
  }

  printStats() {
    document.querySelector("#racePtsSauVER").innerHTML = this.racePtsVER
    document.querySelector("#racePtsSauHAM").innerHTML = this.racePtsHAM
    document.querySelector("#wcPtsSauVER").innerHTML = this.newWcPtsVER
    document.querySelector("#wcPtsSauHAM").innerHTML = this.newWcPtsHAM
    if ((this.newWcPtsVER - this.newWcPtsHAM) >= 26) {
      document.querySelector("#wcDefSauVER").innerHTML = "Ja"
      document.querySelector("#wcDefSauHAM").innerHTML = "Nee"
    } else if ((this.newWcPtsVER - this.newWcPtsHAM) < 26) {
      document.querySelector("#wcDefSauVER").innerHTML = "Onbeslist"
      document.querySelector("#wcDefSauHAM").innerHTML = "Onbeslist"
    }
  }

}


window.addEventListener("load", function() {
  const allStats = new Stats()
  allStats.printStats()
})

document.addEventListener("change", function() {

  const allStats = new Stats()
  allStats.printStats()

  console.log('race position VER', allStats.newRound.racePos.VER);
  console.log('race position HAM', allStats.newRound.racePos.HAM);
  console.log('fastest lap VER', allStats.newRound.fastLap.VER);
  console.log('fastest lap HAM', allStats.newRound.fastLap.HAM);
  console.log('race points VER', allStats.racePtsVER);
  console.log('race points HAM', allStats.racePtsHAM);
  console.log('wc points VER', allStats.newWcPtsVER);
  console.log('wc points HAM', allStats.newWcPtsHAM);
})
