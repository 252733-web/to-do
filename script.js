
// 할 일 데이터 배열
let todos = [
  {
    id: 1,
    text: "JavaScript 공부하기",
    completed: false
  },
  {
    id: 2,
    text: "과제 제출하기",
    completed: false
  }
];


// 할 일 목록 화면에 표시
function renderTodos() {

  let todoList = document.querySelector("#todoList");

  // 기존 목록 초기화
  todoList.innerHTML = "";

  // 모든 할 일 반복
  todos.forEach(function(todo) {

    // li 생성
    let newItem = document.createElement("li");

    // 할 일 텍스트 생성
    let todoText = document.createElement("span");

    todoText.textContent = todo.text;

    todoText.classList.add("todoText");

    // 완료 상태 확인
    if (todo.completed === true) {
      todoText.classList.add("completed");
    }

    // 텍스트 클릭 시 완료 상태 변경
    todoText.addEventListener("click", function() {

      todo.completed = !todo.completed;

      renderTodos();

    });

    // 삭제 버튼 생성
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "삭제";

    deleteBtn.classList.add("deleteBtn");

    // 버튼 클릭 시 완료 상태 변경
    deleteBtn.addEventListener("click", function() {

      todo.completed = !todo.completed;

      renderTodos();

    });

    // 요소 추가
    newItem.append(todoText);

    newItem.append(deleteBtn);

    todoList.append(newItem);

  });

  // 할 일 개수 갱신
  updateCount();

}


// 할 일 추가
function addTodo() {

  // 입력값 가져오기
  let input = document.querySelector("#todoInput");

  let text = input.value.trim();

  // 빈 입력 확인
  if (text === "") {

    alert("할 일을 입력하세요.");

    return;

  }

  // 새로운 할 일 객체 생성
  let newTodo = {

    id: Date.now(),

    text: text,

    completed: false

  };

  // 배열에 추가
  todos.push(newTodo);

  // 화면 다시 그리기
  renderTodos();

  // 입력창 초기화
  input.value = "";

}


// 할 일 개수 갱신
function updateCount() {

  // 전체 개수
  let totalCount = todos.length;

  // 완료 개수
  let completedCount = 0;

  // 완료된 할 일 확인
  todos.forEach(function(todo) {

    if (todo.completed === true) {

      completedCount++;

    }

  });

  // 화면에 개수 표시
  document.querySelector("#totalCount").textContent =
    totalCount;

  document.querySelector("#completedCount").textContent =
    completedCount;

}


// 처음 화면 표시
renderTodos();
