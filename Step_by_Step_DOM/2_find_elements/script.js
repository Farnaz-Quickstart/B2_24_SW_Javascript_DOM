
function handleClickByID() {
  // Selecting Element: getElementById
  let elementInput = document.getElementById("profile")
  elementInput.style.backgroundColor = "red"
}

function changeElements () {


  // Selecting Element: getElementsByClassName
  let greenElements = document.getElementsByClassName ("green")
  console.log (greenElements)
  
  for (let i = 0 ; i < greenElements.length ; i++) {
    let elementTemp = greenElements [i]
    elementTemp.innerHTML = "This is a test"
    elementTemp.style.backgroundColor = "red"
  }

  // Selecting Element: getElementsByTagName
  let paragraphElements = document.getElementsByTagName ("p")
  console.log (paragraphElements)

  for (let i = 0 ; i < paragraphElements.length ; i++) {
    let elementTemp = paragraphElements [i]
    elementTemp.style.backgroundColor = "blue"
  }



}

