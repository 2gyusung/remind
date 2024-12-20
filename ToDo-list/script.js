// DOM 요소 선택
const todoInput = document.querySelector("#todo-input"); // 할 일 입력 필드
const todoList = document.querySelector("#todo-list"); // 할 일 목록
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

// localStorage에서 저장된 데이터를 불러오기
const savedTodoList = JSON.parse(
  localStorage.getItem("saved-items")
); /* 문자열로 저장된 데이터를 JSON.parse를 통해 배열로 변환 */

// 새로운 할 일을 생성하는 함수
const createTodo = function (storageData) {
  let todoContents = todoInput.value; // 입력 필드에서 가져온 값

  if (storageData) {
    todoContents = storageData.contents; // 저장된 데이터가 있으면 그 내용을 사용
  }

  // 할 일을 나타내는 DOM 요소 생성
  const newLi = document.createElement("li"); // li 요소 생성
  const newSpan = document.createElement("span"); // span 요소 생성 (할 일 내용 표시)
  const newBtn = document.createElement("button"); // 완료 버튼 생성

  // 완료 버튼 클릭 시 해당 할 일을 완료 상태로 변경
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete"); // 완료된 상태를 토글
    saveItemsFn(); // 변경 내용을 저장
  });

  // 할 일을 더블클릭하면 삭제
  newLi.addEventListener("dblclick", () => {
    newLi.remove(); // li 요소 제거
    saveItemsFn(); // 변경 내용을 저장
  });

  // 저장된 데이터가 완료 상태면 완료 표시 추가
  if (storageData?.complete) {
    // 옵셔널 체이닝 사용
    newLi.classList.add("complete"); // 완료 클래스 추가
  }

  // 할 일 내용을 span에 추가
  newSpan.textContent = todoContents;
  // li 요소에 버튼과 span을 자식으로 추가
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  // 할 일 목록에 li 추가
  todoList.appendChild(newLi);

  // 입력 필드를 비우기
  todoContents.value = "";
  // 변경된 목록 저장
  saveItemsFn();
};

// Enter 키를 눌렀을 때 할 일 추가
const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo(); // 입력값이 있으면 할 일을 생성
  }
};

// 전체 삭제 기능
const deleteAll = function () {
  const liList = document.querySelectorAll("li"); // 모든 li 요소 선택
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove(); // 모든 할 일 제거
  }
  saveItemsFn(); // 변경 사항 저장
};

// localStorage에 저장하는 함수
const saveItemsFn = function () {
  const saveItems = []; // 저장할 데이터를 담을 배열

  // 현재 목록의 할 일들을 객체로 변환하여 저장
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent, // 할 일 내용
      complete: todoList.children[i].classList.contains("complete"), // 완료 상태
    };
    saveItems.push(todoObj); // 객체를 배열에 추가
  }

  // 배열이 비었으면 localStorage에서 데이터 제거, 아니면 저장
  saveItems.length === 0
    ? localStorage.removeItem("saved-items") // 데이터가 없으면 키 삭제
    : localStorage.setItem(
        "saved-items",
        JSON.stringify(saveItems) // 배열을 문자열로 변환 후 저장
      );
};

// 저장된 데이터가 있으면 불러와 화면에 표시
if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]); // 저장된 데이터로 할 일을 생성
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Cloude",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;
  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9756434244216c3d2f9c08591b54bede`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      console.log(json.name, json.weather[0].main);
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
};

// 위치 정보를 처리하는 함수
const acessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);
  // shorthand property
  const positionObj = {
    latitude, // 위도
    longitude, // 경도 (오타: longitube → longitude)
  };
  // console.log(positionObj); // 위치 정보 출력
  // console.log(position); // 전체 위치 데이터 출력
  weatherSearch(positionObj);
};

// Geolocation API로 사용자 위치 요청
const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(
    acessToGeo, // 위치 정보를 가져오면 실행할 콜백
    (err) => {
      console.log(err); // 에러가 발생하면 에러 정보를 출력
    }
  );
};

// 위치 요청 실행
askForLocation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
