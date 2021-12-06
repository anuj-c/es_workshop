let data = [
  { task: "Workshop on HTML and CSS", type: true },
  { task: "Workshop on JS", type: false },
  { task: "Introduce Firebase", type: false },
];

data.forEach((el) => addTodo(el));

const createTodo = (task) => {
  data.unshift({ task, type: false });
  addTodo({ task, type: false });

  console.log(data);
};
