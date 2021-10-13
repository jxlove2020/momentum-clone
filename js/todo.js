const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  localStorage.setItem('todo-item', newToDo);
  toDoInput.value = '';
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
