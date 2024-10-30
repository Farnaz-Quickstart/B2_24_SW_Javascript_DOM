// addEventListener: 
// Reference: https://www.w3schools.com/jsref/dom_obj_event.asp

document.getElementById("btn_submit2").addEventListener ("click", doSomething())


function handleClick_submit1 () {
  console.log ("Hello 1")
}

function handleClick_submit2 () {
  console.log ("Hello 2")
}

function handleClick_mouseOver() {
  // alert ("mouseOver")
}

function doSomething() {
  console.log ("mytisha")
  alert ("hello")
  document.getElementById("btn_submit1").style.backgroundColor = "blue"
  document.getElementById("btn_submit3").remove()
  let headerTemp = document.createElement ("h2")
  headerTemp.innerText = "haha"
  // document.getElementById ("testDiv").appendChild (headerTemp)
}
 
let mitisha = document.getElementById("btn_submit2")
console.log (mitisha)
mitisha.style.backgroundColor= "red"
// mitisha.addEventListener("click", handleClick_submit);


let btn_submit3 = document.getElementById("btn_submit3")
btn_submit3.addEventListener("mouseover", handleClick_mouseOver);




