// D-Day 메시지를 표시할 HTML 요소를 선택
const messageContainer = document.querySelector('#d-day-message');

// D-Day 타이머 컨테이너를 선택
const container = document.querySelector('#d-day-container');

// 로컬 스토리지에 저장된 이전 D-Day 날짜를 가져옴
const savedDate = localStorage.getItem('saved-date');

// 실행 중인 타이머의 setInterval ID를 저장할 배열
const intervalIdArr = [];

// 사용자가 입력한 연, 월, 일을 조합하여 날짜 문자열을 생성
const dateFormMaker = function () {
  // 사용자가 입력한 연도 값을 가져옴
  const inputYear = document.querySelector('#target-year-input').value;

  // 사용자가 입력한 월 값을 가져옴
  const inputMonth = document.querySelector('#target-month-input').value;

  // 사용자가 입력한 일을 가져옴
  const inputDate = document.querySelector('#target-date-input').value;

  // 입력된 값을 조합해 'YYYY-MM-DD' 형식의 문자열로 변환
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat; // 생성된 날짜 문자열 반환
};

// 입력받은 날짜까지 남은 시간을 계산하고 화면에 표시
const counterMaker = function (data) {
  // 새로 입력된 날짜가 저장된 날짜와 다르면 로컬 스토리지에 저장
  if (data !== savedDate) {
    localStorage.setItem('saved-date', data);
  }

  // 현재 시간을 가져옴
  const nowDate = new Date();

  // 목표 날짜를 자정으로 설정 (시간, 분, 초, 밀리초 초기화)
  const targetDate = new Date(data).setHours(0, 0, 0, 0);

  // 목표 날짜까지 남은 시간을 초 단위로 계산
  const remaining = (targetDate - nowDate) / 1000;

  // 목표 날짜가 이미 지났거나 남은 시간이 0 이하인 경우
  if (remaining <= 0) {
    container.style.display = 'none'; // 타이머 컨테이너 숨김
    messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'; // 종료 메시지 표시
    messageContainer.style.display = 'flex'; // 메시지 컨테이너 보이기
    setClearInterval(); // 모든 타이머 정지
    return; // 함수 종료
  } 
  // 입력된 날짜가 유효하지 않은 경우
  else if (isNaN(remaining)) {
    container.style.display = 'none'; // 타이머 컨테이너 숨김
    messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'; // 에러 메시지 표시
    messageContainer.style.display = 'flex'; // 메시지 컨테이너 보이기
    setClearInterval(); // 모든 타이머 정지
    return; // 함수 종료
  }

  // 남은 시간 계산 (날짜, 시간, 분, 초)
  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24), // 남은 일수 계산
    remainingHours: Math.floor(remaining / 3600) % 24, // 남은 시간 계산
    remainingMin: Math.floor(remaining / 60) % 60, // 남은 분 계산
    remainingSec: Math.floor(remaining) % 60, // 남은 초 계산
  };

  // HTML 요소의 ID 배열
  const documentArr = ['days', 'hours', 'min', 'sec'];

  // remainingObj 객체의 키 배열
  const timeKeys = Object.keys(remainingObj);

  // 한 자리 수 시간을 두 자리로 포맷하는 함수
  const format = function (time) {
    return time < 10 ? '0' + time : time; // 10보다 작으면 앞에 0 추가
  };

  // 각 시간 데이터를 대응하는 HTML 요소에 표시
  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]); // 포맷 적용
    document.getElementById(tag).textContent = remainingTime; // HTML 업데이트
    i++; // 다음 시간 데이터로 이동
  }
};

// 타이머 시작 함수
const starter = function (targetDateInput) {
  // 만약 입력된 날짜가 없으면 dateFormMaker()로 새 날짜 생성
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }

  // 타이머 컨테이너 표시
  container.style.display = 'flex';
  messageContainer.style.display = 'none'; // 메시지 컨테이너 숨김

  // 모든 기존 타이머 정지
  setClearInterval();

  // 남은 시간을 계산하고 화면에 표시
  counterMaker(targetDateInput);

  // 1초마다 카운터 업데이트
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);

  // intervalId를 배열에 저장 (추후 정지용)
  intervalIdArr.push(intervalId);
};

// 모든 setInterval 정지
const setClearInterval = function () {
  // 저장된 모든 intervalId에 대해 clearInterval 호출
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  // 배열 초기화
  intervalIdArr.length = 0;
};

// 타이머를 초기 상태로 재설정
const resetTimer = function () {
  container.style.display = 'none'; // 타이머 컨테이너 숨김
  messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>'; // 초기 메시지 표시
  messageContainer.style.display = 'flex'; // 메시지 컨테이너 표시
  localStorage.removeItem('saved-date'); // 로컬 스토리지에서 날짜 삭제
  setClearInterval(); // 모든 타이머 정지
};

// 페이지 로드 시 로컬 스토리지에 저장된 날짜가 있으면 타이머 시작
if (savedDate) {
  starter(savedDate);
} else {
  // 저장된 날짜가 없으면 초기 메시지 표시
  container.style.display = 'none';
  messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
}
/**사용자가 날짜 입력 → starter 함수 호출 → dateFormMaker로 날짜 생성.
counterMaker로 남은 시간 계산 및 화면 표시.
setInterval로 1초마다 시간 업데이트.
날짜 변경 시, 기존 타이머 정리(setClearInterval) 및 새 타이머 시작.
리셋 시 초기화(resetTimer). */