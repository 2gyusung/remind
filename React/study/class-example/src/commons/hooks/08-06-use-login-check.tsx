import { useRouter } from "next/navigation"

export const useLoginCheck = () => {
    const router = useRouter()

    const loginCheck = () => {
        // 1. 로그인체크
        // ...

        // 2. 실패처리
        alert("로그인을 아직 안하셨군요!")
        router.push("/section08/08-06-custom-hook-login-failed")
    }

    return {
        loginCheck,
    }
}