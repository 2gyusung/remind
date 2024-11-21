const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const createTodo = function () {
  //할일 생성 기능
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    //할일 완료 기능
    newLi.classList.toggle("complete");
  });

  newLi.addEventListener("dblclick", () => {
    //할일 삭제 기능
    newLi.remove();
  });

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  // 입력 엔터 시   createTodo(); 함수 실행
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  //전체 삭제 기능
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};

const saveItemsFn = function () { //localStorage 기능
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents : todoList.childNode[i].querySelector("span").textContent,
      complete : todoList.children[i].classList.contains('complete') //contains 함수 complete 라는 클래스가 존재 하는 지 안하는 지 구분
    }
    saveItems.push(todoObj);
  }
};