const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(
  localStorage.getItem("saved-items")
); /*문자열에서 배열로 변환*/

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  //할일 생성 기능
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    //할일 완료 기능
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    //할일 삭제 기능
    newLi.remove();
    saveItemsFn();
  });

  
  // 저장된 데이터의 `complete` 상태를 반영
  if (storageData?.complete) { //옵셔널 체인
    newLi.classList.add("complete"); // `complete` 클래스 추가
  }

  newSpan.textContent = todoContents; //DOM 트리의 자식 노드들을 가져오거나 다룰 때 사용
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoContents.value = "";
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
  saveItemsFn();
};

const saveItemsFn = function () {
  //localStorage 기능
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"), //contains 함수 : complete 라는 클래스가 존재 하는 지 안하는 지 구분
    };
    saveItems.push(todoObj);
  }

  saveItems.length === 0 
  ?    localStorage.removeItem('saved-items') 
  : localStorage.setItem(
    "saved-items",
    JSON.stringify(saveItems)
  ); /*배열에서 문자열로 변환 localStorage은 문자열로만 저장이 가능하다  */



  // if(saveItems.length === 0) {
  //   localStorage.removeItem('saveItems')
  // }else {
  //   localStorage.setItem(
  //     "saved-items",
  //     JSON.stringify(saveItems)
  //   ); /*배열에서 문자열로 변환 localStorage은 문자열로만 저장이 가능하다  */
  // }

};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const acessToGeo = function (position) {
    const positionObj = {
      latitude : position.coords.latitude,
      longitube :position.coords.longitude

    }
    console.log(positionObj);

    console.log(position);
    
    
    
}


// geolocation API 위치 허용
const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(acessToGeo, (err)=> {
    console.log(err);
    
  }); 
}
askForLocation()