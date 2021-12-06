const toggle = (e) => {
  if (e.previousElementSibling.classList.contains("d-none")) {
    e.previousElementSibling.classList.remove("d-none");
    e.nextElementSibling.classList.add("text-decoration-line-through");
  } else {
    e.previousElementSibling.classList.add("d-none");
    e.nextElementSibling.classList.remove("text-decoration-line-through");
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

const setter = (ele,attr) => {
  for(var key in attr) {
    ele.setAttribute(key, attr[key]);
  }
}

const addTodo = (val) => {
  let div = document.createElement("DIV")
  setter(div,{"class":"task fs-4 my-2 d-flex justify-content-between"})
  div.innerHTML=`<div class="d-flex align-items-center" style="position: relative">\
    <span class="checked d-none" style=" position: absolute; height: 1.3em; width: 1.3em; left: 0.2em; bottom: 0.3em;">\
      <img src="images/check.png" alt="Marked Complete" height="100%" style="position: absolute"/>\
    </span>\
    <span onclick="toggle(this)" class="unchecked" style="position: relative; height: 1.3em; width: 1.3em">\
      <img src="images/checkbox.png" alt="Marked Due" height="100%" style="position: absolute; left: 0"/>\
    </span>\
    <span class="title ms-3">${val}</span>\
    <input type="text" class="d-none editInput" value="${val}"/>\
  </div>\
  <div>\
    <button class="d-none btn badge btn-danger mb-0 px-1 float-end edit" onclick="deleteTodo(this)">\
      <i class="fa fa-trash" aria-hidden="true"></i>\
    </button>\
    <button class="me-2 d-none btn badge btn-warning mb-0 px-1 float-end edit" onclick="editTodo(this)">\
      <i class="fa fa-pencil-alt" aria-hidden="true"></i>\
    </button>\
    <button class="me-2 d-none btn badge btn-success mb-0 px-1 float-end save" onclick="saveTodo(this)">\
      <i class="fa fa-save" aria-hidden="true"></i>\
    </button>\
  </div>`
  document.querySelector(".list").appendChild(div)
};
