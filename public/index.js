let slider = document.getElementById("ballSize")
let size = document.getElementById("ballSizeVal")
size.innerHTML = slider.value

let bubbleArea = document.querySelector(".bubble-area")
let height = bubbleArea.clientHeight
let time = height / size.innerHTML
let i = 0
let j = 0
let start = document.querySelector("#startButton")
let intervalId

slider.oninput = function () {
  size.innerHTML = this.value
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
    let horizontalPosition = getRandomVal(100, 10) + "vw"
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
        let score = 100 - e.target.value
        size.innerHTML = score + Number(size.innerHTML)
        bubbleArea.removeChild(e.target)
      }
      i++
    }
    if (j < 60) {
      document.querySelector(`#bb-${j}`).style.left = horizontalPosition
    }
    j++
    if (j == 60) {
      j = 0
    }
  }, 1000)
}
