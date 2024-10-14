// Adding HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp


function addElements() {
  let element1 = document.createElement('h2')
  element1.innerText = 'New Heading'
  //document.getElementById('aboutus').appendChild(element1)
  document.querySelector('#aboutus').appendChild(element1)
}


