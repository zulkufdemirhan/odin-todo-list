export default function App(){

  const form = document.querySelector('#todoForm');
  const addTodoButton = document.querySelector("#addTodoButton");
  const todoInput = document.querySelector("#todoInput");
  const todoList  = document.querySelector("#todoList");

  const addProject = document.querySelector("#project-button");
  const projectInput = document.querySelector("#project-input");
  const projectList  = document.querySelector("#project-list");

  function createProject (projectValue) {
    const elementli = document.createElement("li");
    elementli.classList.add("list-group-item", "project-list-flex");
  
    const elementProjectDiv = document.createElement("div");
    elementProjectDiv.classList.add("ms-2", "me-auto");
  
    const elementLabel = document.createElement("div");
    elementLabel.classList.add("fw-bold");
    elementLabel.innerText = projectValue;
  
    const elementProjectCount = document.createElement("span");
    elementProjectCount.classList.add("badge", "bg-primary", "rounded-pill");
  
    projectList.appendChild(elementli);
    elementli.appendChild(elementProjectDiv);
    elementli.appendChild(elementProjectCount);
    elementProjectDiv.appendChild(elementLabel);
  }
  
  addProject.addEventListener("click", () => {
    let value = projectInput.value;
    if (value == "") {
      alert("Write something here!");
    }
    else{
      createProject(value)
    }
    projectInput.value = "";
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  function createTodo(inputValue) {
    const elementli = document.createElement("li");
    elementli.classList.add("list-group-item");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen-square", "float-end","text-secondary", "mt-1");

    function createCheckbox() {
      const elementCheckBox = document.createElement("input");
      elementCheckBox.setAttribute("type", "checkbox");
      elementCheckBox.classList.add("form-check-input", "me-2");
    
      elementCheckBox.addEventListener('click', () => {
        if (elementCheckBox.checked) {
          elementli.classList.add("bg-success", "bg-opacity-25");
          editIcon.classList.add("text-success")
        } else {
          elementli.classList.remove("bg-success", "bg-opacity-25");
          editIcon.classList.remove("text-success")
        }
      });
      elementli.appendChild(elementCheckBox);
    }
    createCheckbox();
    
    const elementLabel = document.createElement("label");
    elementLabel.classList.add("form-check-label");
    elementLabel.innerText = inputValue;
    todoList.appendChild(elementli);
    elementli.appendChild(elementLabel);
    elementli.appendChild(editIcon);
  }

  addTodoButton.addEventListener("click", () => {
    let value = todoInput.value;
    if (value == "") {
      alert("Write something here!");
    }
    else{
      createTodo(value)
    }
    todoInput.value = "";
  });
}
