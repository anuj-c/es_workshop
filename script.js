const toggle = (e) => {
  if (e.classList.contains("checked")) {
    e.nextElementSibling.classList.remove("d-none");
    e.nextElementSibling.nextElementSibling.classList.remove(
      "text-decoration-line-through"
    );
    e.classList.add("d-none");
  } else {
    e.previousElementSibling.classList.remove("d-none");
    e.nextElementSibling.classList.add("text-decoration-line-through");
    e.classList.add("d-none");
  }
};

const descButton = (e) => {
  if (e.classList.contains("desc")) {
    e.nextElementSibling.classList.remove("d-none");
    e.classList.add("d-none");
  } else {
    e.previousElementSibling.classList.remove("d-none");
    e.classList.add("d-none");
  }
};

const editTodo = (e) => {
  e.nextElementSibling.classList.remove("d-none");
  let parent = e.parentElement.previousElementSibling;
  parent.querySelector(".title").classList.add("d-none");
  parent.querySelector(".editInput").classList.remove("d-none");
};

const saveTodo = (e) => {
  let parent = e.parentElement.previousElementSibling;
  parent.querySelector(".title").innerText =
    parent.querySelector(".editInput").value;
  parent.querySelector(".title").classList.remove("d-none");
  parent.querySelector(".editInput").classList.add("d-none");
  e.classList.add("d-none");
};

const deleteTodo = (e) => {
  e.parentElement.parentElement.remove();
};

const addTodo = () => {
  let div1 = document.createElement("DIV");
};
