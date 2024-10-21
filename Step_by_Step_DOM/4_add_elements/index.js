// Adding HTML Elements
// Step 1: Create element
// Step 2: Add element to the page (appending)
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp


function handleClick_addElement  () {
  debugger;
  // Step 1: Create element
  let newElement = document.createElement('h1')
  newElement.textContent = "This is Farnaz"
  // Step 2: Add element to the page
  let element1 = document.getElementById("section_aboutme")
  element1.appendChild (newElement)


  // Step 1" Create element
  let newElement2 = document.createElement ("img")
  newElement2.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOiXp7Z8CBohfD0SoLBI3NPjnY4YZQ73dsg&s"
  console.log ("test")
  element1.appendChild (newElement2)

}





function addElements() {
  let element1 = document.createElement('img')
  element1.src = 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg'
  element1.className = 'img_profile'
  document.getElementById('section_image').appendChild(element1)
}


