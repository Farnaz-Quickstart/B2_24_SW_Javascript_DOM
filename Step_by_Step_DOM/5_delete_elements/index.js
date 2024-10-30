// Adding HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

function addElements() {
  let element1 = document.createElement('img')
  element1.src = 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?cs=srgb&dl=pexels-sebastian-189349.jpg&fm=jpg'
  element1.className = 'img_profile'
  document.getElementById('section_image').appendChild(element1)
}

function deleteElements () {
   let image_elements = document.getElementsByTagName ("img")
  // for (let i = image_elements.length ; i > 0 ;i--) {
  //   image_elements[0].remove();
  // }

  for (let i = 0 ; i <  image_elements.length ;i++) {
    image_elements[i].remove();
  }
}






