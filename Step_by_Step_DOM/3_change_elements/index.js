// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

// let element1 = document.getElementById('p-description');            // Return the element as an object 


// element1.innerText = 'This is new text changed by Javascript'
// element1.innerHTML = '<h2>Document Object Model</h2> This is new text changed by Javascript'
// element1.style.color = "red"
// element1.style.fontSize = "100px"


// Option 1: Using a for loop for fruits
let element2 = document.getElementById('fruits'); 
element2.style.fontSize = "50px";

// Option 2:
let element3 = document.getElementById('#fruits'); 
element2.style.color = "green"

// Option 3:
let countryItems = document.querySelectorAll('#country > li'); 
for (let i=0; i < countryItems.length; i++) {
  console.log (i)
  console.log (countryItems [i])
  countryItems[i].style.color = "red"
}

// Option 4: Using forEach
countryItems.forEach(function(currentValue, index, arr){
  console.log (index)
  console.log (currentValue)
  console.log (arr[index])
  countryItems[index].style.color = "yellow"
})

