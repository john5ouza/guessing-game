//Variables
const screen01 = document.querySelector(".screen01")
const screen02 = document.querySelector(".screen02")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen01.classList.contains('hide')) {
    handleResetClick()
  }
})

//Callback
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen02.querySelector("h2").innerText = `You got it right with ${xAttempts} attempts` 
  }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen01.classList.toggle("hide")
  screen02.classList.toggle("hide")
}