// Changing HTML Elements
// Reference: https://www.w3schools.com/js/js_htmldom_document.asp

function handleClick_changeList_bytextContent() {
  let listItems = document.getElementsByClassName("list-group-item")
  for (let i = 0 ; i < listItems.length; i++ ) {
    listItems[i].textContent = `This is Quickstart ${i}`
  }
}

function handleClick_changeList_byinnerHtml() {
  let listItems = document.getElementsByClassName("list-group-item")
  for (let i = 0 ; i < listItems.length; i++ ) {
    listItems[i].innerHTML = `This is our <strong>Class</strong> <span style="color:red">test</span>`
  }
}

function handleClick_change_radioList () {
  let listItems = document.getElementsByName ("fav_language")
  for (let i =0 ; i < listItems.length; i++) {
    if (listItems[i].value == "backend") {
      listItems[i].checked = "true"
    }  
  } 
}

function handleClick_changeImage() {
  let img_element = document.getElementsByTagName ("img")
  console.log (img_element)
  img_element[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHXsWT_vl7zFE8VgeWeGg1XKiH2N1Mv_pYA&s" 
}

function handleClick_changeStyle() {
  let heading_element = document.getElementsByTagName ("h2")
  for (let i =0 ; i < heading_element.length ; i++ ) {
    if  (i < 2) {
        heading_element[i].style.color="red"
    }
  }

}







