// Console log the second and the fourth list item inside the second section 
// only.

let Sections = document.querySelectorAll(".js-second-section > .js-item-list > li:nth-child(2n)")
Sections.forEach((item)=>{
  console.log (item.innerHTML)
})


// A. You're allowed to use the class .js-second-section

// B. You're not allowed to use the class .js-second-section, but you're allowed
// to use the class .js-second-section-title

let sectionItem = document.querySelectorAll(".js-second-section-title ~ .js-item-list > li")

console.log (sectionItem)

let sectionItem = document.querySelectorAll(".js-second-section-title ~ .js-item-list > li")

console.log (sectionItem)