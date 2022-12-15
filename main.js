const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imageButton = document.querySelector('#imageButton')
const buttonReset = document.querySelector('#buttonReset')

function clickOpen(event){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

imageButton.addEventListener('click', clickOpen)
buttonReset.addEventListener('click', function(){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
})