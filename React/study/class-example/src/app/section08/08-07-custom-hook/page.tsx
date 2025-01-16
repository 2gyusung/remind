"use client"

import { useLoginCheck } from "@/commons/hooks/08-06-use-login-check"

export default function CustomhookPage() {
  const { loginCheck } = useLoginCheck() // 그냥 함수가 아닌, 커스텀훅을 써야하는 이유? use로 시작하는 기능(ex, useRouter, useState 등)을 사용하기 위해

  const onClickSubmit = () => {
    // 1. 로그인체크
    loginCheck()

    // 2. 결제하기
    // ...
  }

  return <button onClick={onClickSubmit}>등록하기</button>
}