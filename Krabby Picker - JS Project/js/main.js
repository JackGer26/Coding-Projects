
const topBun = document.querySelector('#topBunPic')
const patty = document.querySelector('#pattyPic')
const pickles = document.querySelector('#picklesPic')
const lettuce = document.querySelector('#lettucePic')
const tomatoes = document.querySelector('#tomatoesPic')
const cheese = document.querySelector('#cheesePic')
const ketchup = document.querySelector('#ketchupPic')
const mustard = document.querySelector('#mustardPic')
const onions = document.querySelector('#onionsPic')
const bottomBun = document.querySelector('#bottomBunPic')


document.querySelector('#topBun').addEventListener('click', bunToggle)
document.querySelector('#patty').addEventListener('click', pattyToggle)
document.querySelector('#pickles').addEventListener('click', picklesToggle)
document.querySelector('#lettuce').addEventListener('click', lettuceToggle)
document.querySelector('#tomatoes').addEventListener('click', tomatoesToggle)
document.querySelector('#cheese').addEventListener('click', cheeseToggle)
document.querySelector('#ketchup').addEventListener('click', ketchupToggle)
document.querySelector('#mustard').addEventListener('click', mustardToggle)
document.querySelector('#onions').addEventListener('click', onionsToggle)
document.querySelector('#bottomBun').addEventListener('click', bottomBunToggle)


function bunToggle () {
    topBun.classList.toggle('hidden')
    document.querySelector('#topBun').classList.toggle('yes')
}

function pattyToggle () {
    patty.classList.toggle('hidden')
    document.querySelector('#patty').classList.toggle('yes')
}

function picklesToggle () {
    pickles.classList.toggle('hidden')
    document.querySelector('#pickles').classList.toggle('yes')
}

function lettuceToggle () {
    lettuce.classList.toggle('hidden')
    document.querySelector('#lettuce').classList.toggle('yes')
}

function tomatoesToggle () {
    tomatoes.classList.toggle('hidden')
    document.querySelector('#tomatoes').classList.toggle('yes')
}

function cheeseToggle () {
    cheese.classList.toggle('hidden')
    document.querySelector('#cheese').classList.toggle('yes')
}

function ketchupToggle () {
    ketchup.classList.toggle('hidden')
    document.querySelector('#ketchup').classList.toggle('yes')
}

function mustardToggle () {
    mustard.classList.toggle('hidden')
    document.querySelector('#mustard').classList.toggle('yes')
}

function onionsToggle () {
    onions.classList.toggle('hidden')
    document.querySelector('#onions').classList.toggle('yes')
}

function bottomBunToggle () {
    bottomBun.classList.toggle('hidden')
    document.querySelector('#bottomBun').classList.toggle('yes')
}

const burgerButton = document.querySelector('#burgerButton')

burgerButton.addEventListener('click', finished)

function finished () {
    alert("this is your final selection")
}
// button for each krabby patty ingredient wanted
// show ingredients when buttons pressed 
// hide ingredients if button not pressed
// when all ingredients chosen press submit button
// when submit button pressed show ingredients chosed