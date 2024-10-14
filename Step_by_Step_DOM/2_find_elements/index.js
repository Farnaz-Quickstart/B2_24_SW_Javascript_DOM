console.log (document)
console.dir (document)
console.log (document.title)
console.log (document.lastModified)

let p_profile = document.getElementById ("paragraph1")

console.log (p_profile)
p_profile.textContent = "hello"

let p_all_profils = document.getElementsByClassName ("js_green")
console.log (p_all_profils)

for (let i =0; i < p_all_profils.length; i++) {
  p_all_profils[i].textContent = "hello"
  p_all_profils[i].style.backgroundColor = "red"
}

let paragraph_green = document.querySelector (".js_green")
console.log (paragraph_green)
p_profile.textContent = "how are you"

paragraph_green = document.querySelectorAll ("p")
console.log (paragraph_green)
for (let i =0; i < p_all_profils.length; i++) {
  p_all_profils[i].textContent = "lolo"
  p_all_profils[i].style.backgroundColor = "black"
}
