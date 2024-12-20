// DOM 요소 선택
const todoInput = document.querySelector("#todo-input"); // 할 일 입력 필드
const todoList = document.querySelector("#todo-list"); // 할 일 목록
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather")); // 저장된 날씨 데이터 가져오기

// localStorage에서 저장된 할 일 데이터 불러오기
const savedTodoList = JSON.parse(
  localStorage.getItem("saved-items") // localStorage에 저장된 데이터를 JSON 형태로 변환
);

// 새로운 할 일을 생성하는 함수
const createTodo = function (storageData) {
  let todoContents = todoInput.value; // 사용자가 입력한 할 일 내용

  // 저장된 데이터가 있으면 그 내용을 사용
  if (storageData) {
    todoContents = storageData.contents;
  }

  // li 요소(할 일 항목)와 자식 요소(span, button) 생성
  const newLi = document.createElement("li"); // 할 일 항목
  const newSpan = document.createElement("span"); // 할 일 내용 표시
  const newBtn = document.createElement("button"); // 완료 상태를 토글할 버튼

  // 완료 버튼 클릭 시 완료 상태 변경
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete"); // 'complete' 클래스 토글로 완료 상태 변경
    saveItemsFn(); // 변경된 상태를 저장
  });

  // 할 일을 더블클릭하면 삭제
  newLi.addEventListener("dblclick", () => {
    newLi.remove(); // 항목 삭제
    saveItemsFn(); // 변경 사항 저장
  });

  // 저장된 데이터가 완료 상태이면 완료 표시 추가
  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  // 할 일 내용을 span에 추가
  newSpan.textContent = todoContents;

  // li 요소에 버튼과 span을 자식으로 추가
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);

  // 할 일 목록에 새 항목(li) 추가
  todoList.appendChild(newLi);

  // 입력 필드 초기화
  todoInput.value = "";

  // 변경된 목록 저장
  saveItemsFn();
};

// Enter 키를 눌렀을 때 할 일 추가
const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo(); // 할 일을 생성
  }
};

// 전체 삭제 기능
const deleteAll = function () {
  const liList = document.querySelectorAll("li"); // 모든 li 요소 선택
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove(); // 모든 항목 제거
  }
  saveItemsFn(); // 변경 사항 저장
};

// localStorage에 할 일 데이터를 저장하는 함수
const saveItemsFn = function () {
  const saveItems = []; // 저장할 데이터 배열

  // 현재 할 일 목록을 순회하며 데이터를 객체로 변환
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent, // 할 일 내용
      complete: todoList.children[i].classList.contains("complete"), // 완료 상태
    };
    saveItems.push(todoObj); // 배열에 추가
  }

  // 데이터가 없으면 로컬 스토리지에서 제거, 있으면 저장
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

// 저장된 할 일 데이터가 있으면 불러와 화면에 표시
if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]); // 저장된 데이터를 기반으로 할 일을 생성
  }
}

// 날씨 데이터를 화면에 표시하고 배경 이미지를 변경하는 함수
const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ]; // 지원하는 날씨 목록
  weather = weatherMainList.includes(weather) ? weather : "Fog"; // 지원되지 않는 날씨는 'Fog' 처리

  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location; // 위치 이름 표시

  // 배경 이미지를 날씨에 맞게 변경
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  // 날씨 정보가 변경되었으면 로컬 스토리지에 저장
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

// 날씨 정보를 API에서 가져오는 함수
const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9756434244216c3d2f9c08591b54bede`
  )
    .then((res) => res.json()) // 응답을 JSON으로 변환
    .then((json) => {
      const weatherData = {
        location: json.name, // 위치 이름
        weather: json.weather[0].main, // 주요 날씨 정보
      };
      console.log(json.name, json.weather[0].main); // 디버깅용 출력
      weatherDataActive(weatherData); // 화면에 날씨 데이터 표시
    })
    .catch((err) => {
      console.log(err); // 에러 처리
    });
};

// 위치 정보를 처리하는 함수
const acessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords; // 위도와 경도 추출
  console.log(latitude, longitude); // 디버깅용 출력

  const positionObj = { latitude, longitude }; // 위치 정보를 객체로 저장
  weatherSearch(positionObj); // 날씨 데이터 검색
};

// Geolocation API를 통해 위치 정보를 요청
const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(
    acessToGeo, // 성공 시 위치 데이터를 처리
    (err) => {
      console.log(err); // 실패 시 에러 처리
    }
  );
};

// 위치 정보 요청 실행
askForLocation();

// 로컬 스토리지에 저장된 날씨 데이터가 있으면 불러와 표시
if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
