export function todo(){
  const form = document.querySelector('#todoForm');
  const addTodoButton = document.querySelector("#addTodoButton");
  const todoInput = document.querySelector("#todoInput");
  const todoList  = document.querySelector("#todoList");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  function createTodo(inputValue) {
    const elementli = document.createElement("li");
    elementli.classList.add("list-group-item");

    const elementCheckBox = document.createElement("input");
    elementCheckBox.setAttribute("type", "checkbox");
    elementCheckBox.classList.add("form-check-input", "me-2");

    const elementLabel = document.createElement("label");
    elementLabel.classList.add("form-check-label");
    elementLabel.innerText = inputValue;

    todoList.appendChild(elementli);
    elementli.appendChild(elementCheckBox);
    elementli.appendChild(elementLabel);
  }

  addTodoButton.addEventListener("click", () => {
    let value = todoInput.value;
    if (value == "") {
      console.log("Write something here...")
    }
    else{
      createTodo(value)
    }
    todoInput.value = "";
  });
}
