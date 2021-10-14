const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
// 애플리케이션이 시작할 때(리프레시 될 때) 초기화
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log(event.target.parentElement);
  const li = event.target.parentElement;
  // console.log(li.id);
  li.remove();
  // localStorage 의 removeItem 을 쓰지 않고 filter 를 쓰는 이유는 removeItem 은 Array 를 모두 지우기 때문
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const button = document.createElement('button');
  button.innerText = '✖';

  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  // 리프레시 되어도 localStorage 에 값이 있으면 값 가져오기
  toDos = parsedToDos;

  parsedToDos.forEach(paintToDo);
}
