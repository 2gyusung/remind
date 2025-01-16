import { useState } from "react"

interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
}

export default function TypescriptPage(){

    const [profile, setProfile] = useState<IProfile>({
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    })
    
    setProfile({
        name: "훈이", // 타입추론으로 이것만 가능
        age: "8살",
        school: "공룡초등학교",
        hobby: "수영",
    })

    return <></>
}