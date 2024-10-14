let counter = document.querySelectorAll('.js-container')[0]
let upButton = document.querySelector('.js-1up-button')
let restButton = document.querySelector('.js-reset-button')

upButton.addEventListener('click', function (){
  counter.innerHTML = Number(counter.textContent)+1;
});

restButton.addEventListener('click', function () {
  alert ("Hello")
})

console.log (counter)
console.log (upButton)
console.log (restButton)