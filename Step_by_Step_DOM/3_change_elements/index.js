// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

function handleClick_changeList_bytextContent() {
  let elementItems = document.getElementsByClassName("list-group-item")
  for (i = 0 ; i < elementItems.length; i++) {
    elementItems[i].textContent = `Quickstart Day ${i}`
  }
}

function handleClick_changeList_byInnerHtml() {
  let elementItems = document.getElementsByClassName("list-group-item")
  for (i = 0 ; i < elementItems.length; i++) {
    elementItems[i].innerHTML = `<p><strong>This is our class 😁 </strong><em>How are you</em></p>`
  }
}

function functionhandleClick_checkCheckbox () {
  let elementItems = document.getElementsByName("fav_language")
  console.log (elementItems)
  elementItems.forEach((element) => {
    if (element.value =="backend" ) 
      element.checked = "checked"
  })
}


function functionhandleClick_changeImage () {
  document.getElementById ("img_profile").src = "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_640.jpg"
}
function handleClick_changeStyle () {

}






