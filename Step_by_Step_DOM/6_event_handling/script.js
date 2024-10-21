// addEventListener: 
// Reference: https://www.w3schools.com/jsref/dom_obj_event.asp

function handleClick_submit () {
  console.log("Hello, World!");
}


let mybutton = document.getElementById('btn_submit2');
mybutton.style.backgroundColor = "red"
mybutton.addEventListener ("click", handleClick_submit)
mybutton.addEventListener ("click", ()=>{console.log ("arrow function")})




