(()=>{"use strict";!function(){const e=document.querySelector("#todoForm"),t=document.querySelector("#addTodoButton"),c=document.querySelector("#todoInput"),s=document.querySelector("#todoList"),d=document.querySelector("#project-button"),n=document.querySelector("#project-input"),o=document.querySelector("#project-list");d.addEventListener("click",(()=>{let e=n.value;""==e?alert("Write something here!"):function(e){const t=document.createElement("li");t.classList.add("list-group-item","project-list-flex");const c=document.createElement("div");c.classList.add("ms-2","me-auto");const s=document.createElement("div");s.classList.add("fw-bold"),s.innerText=e;const d=document.createElement("span");d.classList.add("badge","bg-primary","rounded-pill"),o.appendChild(t),t.appendChild(c),t.appendChild(d),c.appendChild(s)}(e),n.value=""})),e.addEventListener("submit",(e=>{e.preventDefault()})),t.addEventListener("click",(()=>{let e=c.value;""==e?alert("Write something here!"):function(e){const t=document.createElement("li");t.classList.add("list-group-item");const c=document.createElement("i");c.classList.add("fas","fa-pen-square","float-end","text-secondary","mt-1"),function(){const e=document.createElement("input");e.setAttribute("type","checkbox"),e.classList.add("form-check-input","me-2"),e.addEventListener("click",(()=>{e.checked?(t.classList.add("bg-success","bg-opacity-25"),c.classList.add("text-success")):(t.classList.remove("bg-success","bg-opacity-25"),c.classList.remove("text-success"))})),t.appendChild(e)}();const d=document.createElement("label");d.classList.add("form-check-label"),d.innerText=e,s.appendChild(t),t.appendChild(d),t.appendChild(c)}(e),c.value=""}))}()})();