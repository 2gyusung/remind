const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";

const dateForMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  //const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;

  // console.log(inputYear, inputDate, inputMonth);
};
const counterMaker = function (data) {
  console.log(data);
  
  const targetDateInput = dateForMaker();
  // console.log(targetDateInput);
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // 만약  remaining이 0이라면 , 타이머가 종료 되었습니다 출력 (수도코드)
  console.log(remaining);

  if (remaining === 0 || remaining < 0) {
    // console.log("타이머가 종료되었습니다");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력
    // console.log("유효한 시간대가 아닙니다");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remaingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remaingHours: Math.floor(remaining / 3600) % 24,
    remaingMin: Math.floor(remaining / 60) % 60,
    remaingSec: Math.floor(remaining) % 60,
  };

  const documentArr = ["days", "hours", "min", "sec"];
  // const docKeys = Object.keys(documentObj);
  const timeKeys = Object.keys(remaingObj); // Object.keys : 객체의 키를 가져와 배열로 반환f
  // ['remainingDate','remaingHours','remaingMin','remaingSec']

  const format = function(time) {
    if(time < 10) {
      return '0' + time
    }else {
      return time
    }
  }

  let i = 0;
  for (let tag of documentArr) {
    const remaingTime = format(remaingObj[timeKeys[i]]);
    // 배열로 이용한다
    document.getElementById(tag).textContent = remaingTime
    i++;
  }
};

const starter = () => {
  const targetDateInput = dateForMaker()
  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval()
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => counterMaker(targetDateInput), 1000);
  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

const setClearInterval = function () {
  // container.style.display = "none";
  // messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";
  // messageContainer.style.display = "flex";
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";
  messageContainer.style.display = "flex";
  setClearInterval();
};
