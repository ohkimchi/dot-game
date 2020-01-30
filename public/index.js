var slider = document.getElementById('ballSize')
var size = document.getElementById('ballSizeVal')
size.innerHTML = slider.value

let bubbleArea = document.querySelector('.bubble-area')
let height = bubbleArea.clientHeight
let time = height / size.innerHTML
let i = 0;
let j = 0

slider.oninput = function () {
  size.innerHTML = this.value
  time = height / this.value
}

function getRandomVal(maximum, minimum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

let start = document.querySelector('#startButton')
let intervalId
start.onclick = function (e) {
  start.innerHTML = e.target.innerHTML === 'Start' ? 'Pause' : 'Start'
  // let intervalId = gameMode()

  if (start.innerHTML === 'Pause') {
    intervalId = gameMode()
  } else {
    clearInterval(intervalId)
  }
}

function gameMode() {
  return setInterval(() => {
    let horizontalPosition = getRandomVal(100, 10) + 'vw';
    let diameter = getRandomVal(100, 10)
    let i = document.querySelectorAll('.bb').length

    if (i < 60) {
      let newBall = document.createElement('SPAN')
      newBall.className = "bb"
      newBall.id = `bb-${i}`
      newBall.style.animationDuration = time + 's'
      newBall.style.left = horizontalPosition
      newBall.style.width = diameter + 'px'
      newBall.style.height = diameter + 'px'
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
