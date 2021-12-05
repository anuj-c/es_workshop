const toggle = (e) => {
  if(e.classList.contains("checked")){
    e.nextElementSibling.classList.remove("d-none")
    e.nextElementSibling.nextElementSibling.classList.remove("text-decoration-line-through")
    e.classList.add("d-none")
  }else{
    e.previousElementSibling.classList.remove("d-none")
    e.nextElementSibling.classList.add("text-decoration-line-through")
    e.classList.add("d-none")
  }
}

const descButton = (e) => {
  if(e.classList.contains("desc")){
    e.nextElementSibling.classList.remove("d-none")
    e.classList.add("d-none")
  }else{
    e.previousElementSibling.classList.remove("d-none")
    e.classList.add("d-none")
  }
}

const editTodo = (e) => {
  
}