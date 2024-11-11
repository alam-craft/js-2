let onBtn = document.querySelector('.onBtn')
let bulb = document.querySelector('.bulb')
function turnOn(){
    bulb.src="./x1.jpeg"
}
onBtn.addEventListener('click',turnOn)

let offBtn = document.querySelector('.offBtn')

function turnOff(){
   bulb.src="./x2.jpeg"
}
offBtn.addEventListener('click',turnOff)
