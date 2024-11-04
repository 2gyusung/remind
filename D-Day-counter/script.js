const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

// container.style.display = 'none'
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
const counterMaker = function () {
  const targetDateInput = dateForMaker();
  // console.log(targetDateInput);
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // 만약  remaining이 0이라면 , 타이머가 종료 되었습니다 출력 (수도코드)
  console.log(remaining);

  if (remaining === 0 || remaining < 0) {
    // console.log("타이머가 종료되었습니다");
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다</h3>";
  } else if (isNaN(remaining)) {
    // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력
    // console.log("유효한 시간대가 아닙니다");
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
  }

  //   const remainingDate = Math.floor(remaining / 3600 / 24); //Math. floor 소숫점 제거
  //   const remaingHours = Math.floor(remaining / 3600) % 24;
  //   const remaingMin = Math.floor(remaining / 60) % 60;
  //   const remaingSec = Math.floor(remaining) % 60;

  const remaingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remaingHours: Math.floor(remaining / 3600) % 24,
    remaingMin: Math.floor(remaining / 60) % 60,
    remaingSec: Math.floor(remaining) % 60,
  };

//   const days = document.getElementById("days");
//   const hours = document.getElementById("hours");
//   const min = document.getElementById("min");
//   const sec = document.getElementById("sec");

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  documentObj['days'].textContent = remaingObj["remainingDate"];
  documentObj['hours'].textContent = remaingObj["remaingHours"];
  documentObj['min'].textContent = remaingObj["remaingMin"];
  documentObj['sec'].textContent = remaingObj["remaingSec"];

  //   console.log("클릭");

  //   console.log(remainingDate, remaingHours, remaingMin, remaingSec);
};
