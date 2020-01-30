let slider = document.getElementById("ballSize")
let score = document.getElementById("ballSizeVal")
score.innerHTML = '0'

let bubbleArea = document.querySelector(".bubble-area")
let height = bubbleArea.clientHeight
let time = height / slider.value
let i = 0
let j = 0
let start = document.querySelector("#startButton")
let intervalId

slider.oninput = function () {
  time = height / this.value
}

function getRandomVal(maximum, minimum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

start.onclick = function (e) {
  start.innerHTML = e.target.innerHTML === "Start" ? "Pause" : "Start"

  if (start.innerHTML === "Pause") {
    // when game is started
    intervalId = gameMode()
    document.querySelectorAll(".bb").forEach(e => {
      e.style.animationIterationCount = infinite
      e.style.opacity = 1
    })
  } else {
    // when game is paused
    clearInterval(intervalId)
    document.querySelectorAll(".bb").forEach(e => {
      console.log(e)
      e.style.animationIterationCount = "inherit"
      e.style.opacity = 0
    })
  }
}

function gameMode() {
  return setInterval(() => {
    let horizontalPosition = getRandomVal(90, 10) + "vw"
    let diameter = getRandomVal(100, 10)
    let i = document.querySelectorAll(".bb").length

    if (i < 60) {
      let newBall = document.createElement("SPAN")
      newBall.className = "bb"
      newBall.id = `bb-${i}`
      newBall.style.animationDuration = time + "s"
      newBall.style.left = horizontalPosition
      newBall.style.width = diameter + "px"
      newBall.style.height = diameter + "px"
      newBall.value = diameter
      bubbleArea.appendChild(newBall)
      newBall.onclick = function (e) {
        let scoreCurrent = Math.floor(-0.1 * (e.target.value) + 11)
        score.innerHTML = scoreCurrent + Number(score.innerHTML)
        bubbleArea.removeChild(e.target)
      }
      i++
    }
    if (j < 60) {
      if (document.querySelector(`#bb-${j}`)) {
        document.querySelector(`#bb-${j}`).style.left = horizontalPosition
      }
    }
    j++
    if (j == 60) {
      j = 0
    }
  }, 1000)
}
