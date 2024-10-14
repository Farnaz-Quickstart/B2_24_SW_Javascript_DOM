const frm = document.querySelector(".js-form")
let addButton = document.querySelector("button");
let textBox = document.querySelector("input[type=text]")
let textDate = document.querySelector("input[type=date]")
const todosContainer = document.querySelector('.js-container');


const TodoItems = [
  {todoItem:"item1", todoDate:"2022-11-12"},
  {todoItem:"item2", todoDate:"2023-11-12"},
  {todoItem:"item3", todoDate:"2024-11-12"}
]

frm.addEventListener("submit", function(event){

  event.preventDefault();
 
  let todoItem = textBox.value
  let todoDate = textDate.value
  console.log (todoItem, todoDate)
  TodoItems.push ({
    todoItem: todoItem,
    todoDate: todoDate
  })
  renderTodos();
  console.log (TodoItems)
 
})

function renderTodos () {
  let html = "<ul>"
  let data1 = "AAAA"
  let date1 = "2023-11-12"


  TodoItems.forEach ((item)=>{
    console.log (item.todoItem);
    console.log (item.todoDate);
    let li_Items = "<li>" + item.todoItem + ":" + item.todoDate + "</li>"
    html = html + li_Items 
  })

  let li_Items = "<li>" + data1 + ":" + date1 + "</li>"
  html = html + li_Items 
  html += "</ul>"
  todosContainer.innerHTML = html
  console.log (html)
}
renderTodos();

