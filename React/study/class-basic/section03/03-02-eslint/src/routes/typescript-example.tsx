export default function Typescriptexample() {
  // 타입추론
  let aaa = "안녕하세요";
  aaa = 3; // TypeError

  // 타입명시
  let bbb: string = "반갑습니다";
  bbb = 10; // TypeError

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  ddd = "철수"; // TypeError

  // 불린타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // TypeError, if문에서는 true로 작동함

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]; // TypeError
  let ggg: string[] = ["철수", "영희", "훈이", 10]; // TypeError
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기!!

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };
  profile.name = "훈이"; // 타입추론으로 이것만 가능
  profile.age = "8살";
  profile.school = "공룡초등학교";
  profile.hobby = "수영";

  // 함수타입 => 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시, 타입명시 필요!!)
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능!!!

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능!!!

  // any타입
  let qqq: any = "철수"; // 자바스크립트와 동일!
  qqq = 123;
  qqq = true;

  return <></>;
}

/* 배열타입 */
// 문자열만 있는 배열
let aaa: string[] = ["원두", "은정", "혜원"];

// 배열에 문자열과 숫자열을 같이 넣어두고 싶을 때
let fff: (string | number)[] = [1, 2, 3, "철수", "영희"];

// 모두 숫자이거나 모두 문자인 배열
let hhh: string[] | number[] = ["영희", "철수"];
hhh = [1, 2, 3];

/* 객체타입 */
interface Ipropfile {
  name: string;
  age: number;
  school: string;
}
const profile: Ipropfile = {
  name: "원두",
  age: 8,
  school: "코캠 초등학교",
};

//age의 타입이 문자열이거나 숫자열일 때
interface Ipropfile {
  name: string;
  age: string | number;
  school: string;
}
const profile: Ipropfile = {
  name: "원두",
  age: 8 || "8살",
  school: "코캠 초등학교",
};
