// addEventListener: 
// Reference: https://www.w3schools.com/jsref/dom_obj_event.asp

console.log ("file")

function handleClick_inline () {
  alert("Hello, World!");
}



let mybutton = document.getElementById('btn_submit2');
mybutton.addEventListener('click', function() {
  alert ("This is Event Listener")
})

mybutton.onmouseover = function() {
  alert ("mouse over")
}


let btn_dark = document.getElementById('btn_dark');
btn_dark.addEventListener ('click', handleClink_dark)

function handleClink_dark() {
  document.body.style.backgroundColor = "black";
}




