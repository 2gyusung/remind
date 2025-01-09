import { useState } from "react";

interface Iprofile {
  name: String;
  age: number | string;
  school: String;
  hobby?: string;
}

const TypescriptStateExample = () => {
  // 타입 추론
  const [age, setAge] = useState(12);
  // setAge('12살')

  // 타입명시
  const [school, setSchool] = useState<string>("");

  // 타입명시를 해야하는 상황

  const [profile, setProfile] = useState<Iprofile>({
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  });
  setProfile({
    name: "훈이",
    age: "12살",
    school: "공룡초등학교",
    hobby: "수영",
  });
  return <></>;
};
