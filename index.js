

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


// class Vars { 
//   constructor(el) {
//     this.el = document.querySelector('#' + el)
//   }

//   get theValue() {
//     return this.getValue()
//   }

//   getValue() {
//     return this.el.value
//   }
// }


// // window.addEventListener("load", function() {
// //   new Vars()
// // })



// const racePtsCell = {
//   AbuVER : document.querySelector("#racePtsAbuVER"),
//   AbuHAM : document.querySelector("#racePtsAbuHAM"),
//   SauVER : document.querySelector("#racePtsSauVER"),
//   SauHAM : document.querySelector("#racePtsSauHAM")
// }


// function setRacePts(clickedElement, racePtsCell, chosenValue, ptsLadder) {
//   if (clickedElement.startsWith("racePos")) {
//     const racePts = ptsLadder[chosenValue]
    
//     if (clickedElement.includes("AbuVER")) {
//       racePtsCell.AbuVER.innerHTML = racePts
//       if (document.querySelector("#fastestLapAbuVER").checked) {
//         let racePtsCellContentVER = racePtsCell.AbuVER.innerHTML
//         let racePtsCellContentHAM = racePtsCell.AbuHAM.innerHTML
//         racePtsCell.AbuVER.innerHTML = parseInt(racePtsCellContentVER) + 1
//         racePtsCell.AbuHAM.innerHTML = parseInt(racePtsCellContentHAM) - 1
//       }
//     }
//     if (clickedElement.includes("AbuHAM")) {
//       racePtsCell.AbuHAM.innerHTML = racePts
//       if (document.querySelector("#fastestLapAbuHAM").checked) {
//         let racePtsCellContentHAM = racePtsCell.AbuHAM.innerHTML
//         let racePtsCellContentVER = racePtsCell.AbuVER.innerHTML
//         racePtsCell.AbuHAM.innerHTML = parseInt(racePtsCellContentHAM) + 1
//         racePtsCell.AbuVER.innerHTML = parseInt(racePtsCellContentVER) - 1
//       }
//     }
//     if (clickedElement.includes("SauVER")) {
//       racePtsCell.SauVER.innerHTML = racePts
//       if (document.querySelector("#fastestLapSauVER").checked) {
//         let racePtsCellContentVER = racePtsCell.SauVER.innerHTML
//         let racePtsCellContentHAM = racePtsCell.SauHAM.innerHTML
//         racePtsCell.SauVER.innerHTML = parseInt(racePtsCellContentVER) + 1
//         racePtsCell.SauHAM.innerHTML = parseInt(racePtsCellContentHAM) - 1
//       }
//     }
//     if (clickedElement.includes("SauHAM")) {
//       racePtsCell.SauHAM.innerHTML = racePts
//       if (document.querySelector("#fastestLapSauHAM").checked) {
//         let racePtsCellContentHAM = racePtsCell.SauHAM.innerHTML
//         let racePtsCellContentVER = racePtsCell.SauVER.innerHTML
//         racePtsCell.SauHAM.innerHTML = parseInt(racePtsCellContentHAM) + 1
//         racePtsCell.SauVER.innerHTML = parseInt(racePtsCellContentVER) - 1
//       }
//     }
//   }
// }

// function addFastestLapPt(clickedElement, racePtsCell) {
//   if (clickedElement.startsWith("fastestLap")) {
//     if (clickedElement.includes("AbuVER")) {
//       let racePtsCellContentVER = racePtsCell.AbuVER.innerHTML
//       let racePtsCellContentHAM = racePtsCell.AbuHAM.innerHTML
//       racePtsCell.AbuVER.innerHTML = parseInt(racePtsCellContentVER) + 1
//       racePtsCell.AbuHAM.innerHTML = parseInt(racePtsCellContentHAM) - 1
//     }
//     if (clickedElement.includes("AbuHAM")) {
//       let racePtsCellContentHAM = racePtsCell.AbuHAM.innerHTML
//       let racePtsCellContentVER = racePtsCell.AbuVER.innerHTML
//       racePtsCell.AbuHAM.innerHTML = parseInt(racePtsCellContentHAM) + 1
//       racePtsCell.AbuVER.innerHTML = parseInt(racePtsCellContentVER) - 1
//     }
//     if (clickedElement.includes("SauVER")) {
//       let racePtsCellContentVER = racePtsCell.SauVER.innerHTML
//       let racePtsCellContentHAM = racePtsCell.SauHAM.innerHTML
//       racePtsCell.SauVER.innerHTML = parseInt(racePtsCellContentVER) + 1
//       racePtsCell.SauHAM.innerHTML = parseInt(racePtsCellContentHAM) - 1
//     }
//     if (clickedElement.includes("SauHAM")) {
//       let racePtsCellContentHAM = racePtsCell.SauHAM.innerHTML
//       let racePtsCellContentVER = racePtsCell.SauVER.innerHTML
//       racePtsCell.SauHAM.innerHTML = parseInt(racePtsCellContentHAM) + 1
//       racePtsCell.SauVER.innerHTML = parseInt(racePtsCellContentVER) - 1
//     }
//   }
// }

// // document.addEventListener("change", function(e) {
// //   const clickedElement = e.target.id
// //   const chosenValue = new Vars(clickedElement).theValue

// //   console.log(clickedElement)
// //   console.log(chosenValue)
  
// //   setRacePts(clickedElement, racePtsCell, chosenValue, ptsLadder)
// //   addFastestLapPt(clickedElement, racePtsCell)
  
// // })






const stats = {
  r21 : {
    wcPts : {
      VER : 351.5, 
      HAM : 343.5, 
    }
  },
  r22 : {
    racePos : { 
      VER : document.querySelector('#racePosSauVER').value,
      HAM : document.querySelector('#racePosSauHAM').value,
    },
    fastLap : {
      VER : true,
      HAM : false,
      OTH : false,
    },

    get racePtsVER() {
      if (this.fastLap.VER == true) {
        return ptsLadder[this.racePos.VER] + 1
      } else {
        return ptsLadder[this.racePos.VER]
      }
    },
    get racePtsHAM() {
      if (this.fastLap.HAM == true) {
        return ptsLadder[this.racePos.HAM] + 1
      } else {
        return ptsLadder[this.racePos.HAM]
      }
    },

    get prevWcPtsVER() {
      return stats.r21.wcPts.VER
    },
    get prevWcPtsHAM() {
      return stats.r21.wcPts.HAM
    },

    get wcPtsVER() {
      return this.racePtsVER + this.prevWcPtsVER
    },   
    get wcPtsHAM() {
      return this.racePtsHAM + this.prevWcPtsHAM
    },

    get wcDefVER() {},
    get wcDefVER() {}
  },
}



class Vars { 
  constructor(el) {
    this.el = document.querySelector('#' + el)
  }

  get theValue() {
    return this.getValue()
  }

  getValue() {
    return this.el.value
  }
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

  // const racePtsCell = {
  //   SauVER : document.querySelector("#racePtsSauVER"),
  //   SauHAM : document.querySelector("#racePtsSauHAM"),
  // }
  // console.log(racePtsCell);

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


// r23 : {
//   VER : {
//     racePos : "",
//     racePts : "",
//     fastLap : "",
//     wcPts : "",
//     wcDef : "",
//   },
//   HAM : {
//     racePos : "",
//     racePts : "",
//     fastLap : "",
//     wcPts : "",
//     wcDef : "",
//   },
//   OTHER : {
//     fastLap : "",
//   }
// },



  // class Stats {
  //   constructor(newRound, prevRound) {
  
  //     this.r21 = {
  //       wcPts : {
  //         VER : 351.5, 
  //         HAM : 343.5, 
  //       },
  //     }
  
  //     this.r22 = {
  //       racePos : { 
  //         VER : document.querySelector('#racePosSauVER').value,
  //         HAM : document.querySelector('#racePosSauHAM').value,
  //       },
  //       fastLap : {
  //         VER : document.querySelector('#fastestLapSauVER').checked,
  //         HAM : document.querySelector('#fastestLapSauHAM').checked,
  //       },
  //     }
  //   }
    
  //   get racePtsVER() {
  //     if (this.r22.fastLap.VER == true && this.r22.racePos.VER != 11) {
  //       return ptsLadder[this.r22.racePos.VER] + 1
  //     } else {
  //       return ptsLadder[this.r22.racePos.VER]
  //     }
  //   }
  //   get racePtsHAM() {
  //     if (this.r22.fastLap.HAM == true && this.r22.racePos.HAM != 11) {
  //       return ptsLadder[this.r22.racePos.HAM] + 1
  //     } else {
  //       return ptsLadder[this.r22.racePos.HAM]
  //     }
  //   }
  
  //   get prevWcPtsVER() {
  //     return this.r21.wcPts.VER
  //   }
  //   get prevWcPtsHAM() {
  //     return this.r21.wcPts.HAM
  //   }
  
  //   get wcPtsVER() {
  //     return this.racePtsVER + this.prevWcPtsVER
  //   } 
  //   get wcPtsHAM() {
  //     return this.racePtsHAM + this.prevWcPtsHAM
  //   }
  
  // }