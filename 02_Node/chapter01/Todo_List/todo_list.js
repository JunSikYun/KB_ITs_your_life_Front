//추가 버튼 동작 확인 변수
let addButton = document.getElementById('btn');
//입력 값 확인 변수
let inputField = document.getElementById('todo');
//li 리스트 추가를 위한 변수
let todoList = document.getElementById('todo-list');

//입력 값의 존재 여부 확인
addButton.addEventListener('click', function () {
  let todoText = inputField.value;
  if (todoText == '') {
    alert('할 일을 입력하세요!');
    return;
  }
  //li 추가 함수 호출 후 입력 필드 초기화
  addTodo(todoText);
  inputField.value = '';
});
//li 추가
function addTodo(todoText) {
  let li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
          ${todoText} 
          <button class="delete-btn" onclick="removeTodo(this)">삭제</button>
      `;

  let firstItem = todoList.firstChild;
  todoList.insertBefore(li, firstItem);
}

//li 삭제
function removeTodo(button) {
  let listItem = button.parentElement;
  listItem.remove();
}
