var slider = document.getElementById('ballSize')
var size = document.getElementById('ballSizeVal')
size.innerHTML = slider.value

let bubbleArea = document.querySelector('.bubble-area')
let height = 80
let time = height / size.innerHTML
let i = 0;
let j = 0

slider.oninput = function () {
  size.innerHTML = this.value
  time = height / this.value
}


setInterval(() => {
  let horizontalPosition = Math.floor(Math.random() * 95) + 'vw';
  console.log(horizontalPosition, time)

  if (i < 10) {
    let newBall = document.createElement('DIV')
    newBall.className = "bb"
    newBall.id = `bb-${i}`
    newBall.style.animationDuration = time + 's'
    newBall.style.left = horizontalPosition
    document.querySelector('.bubble-area').appendChild(newBall)
    i++
  }
  if (j < 10) {
    document.querySelector(`#bb-${j}`).style.left = horizontalPosition
  }
  j++
  if (j == 10) {
    j = 0
  }
}, 1000)
