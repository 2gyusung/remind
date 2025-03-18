# 📌 CORS와 Proxy 서버 쉽게 이해하기

## 1️⃣ SOP(Same-Origin Policy)란?
웹 브라우저는 보안을 위해 **SOP(동일 출처 정책)**을 적용합니다. 즉, **같은 출처**에서만 데이터를 주고받을 수 있습니다.

✔ **같은 출처(Same-Origin)의 기준**
- **도메인**(예: `example.com`)
- **프로토콜**(예: `http` 또는 `https`)
- **포트 번호**(예: `:3000`, `:8080`)

💡 **예시**
- ✅ `http://example.com:80/page1` → `http://example.com:80/page2` (**같은 출처**)
- ❌ `http://example.com` → `https://example.com` (**출처가 다름, 프로토콜 차이**)


---

## 2️⃣ CORS(Cross-Origin Resource Sharing)란?
SOP 정책이 너무 엄격하기 때문에, 이를 **유연하게 조정할 수 있는 방법**이 **CORS**입니다.

✔ **CORS는 서버에서 허용한 경우에만 다른 출처에서 데이터를 요청할 수 있도록 합니다.**

💡 **예시**
```http
Access-Control-Allow-Origin: *  // 모든 출처 허용
Access-Control-Allow-Origin: https://my-frontend.com  // 특정 사이트만 허용
```

**즉, 서버에서 CORS 설정을 하면 다른 출처에서도 데이터를 가져올 수 있습니다!**

---

## 3️⃣ Preflight Request(사전 요청)이란?
브라우저는 보안 강화를 위해 **OPTIONS**라는 사전 요청을 보낼 때가 있습니다.

✔ **언제 Preflight Request가 발생할까요?**
- `POST`, `PUT`, `DELETE` 같은 특별한 요청을 보낼 때
- 요청 헤더에 `Authorization`, `Content-Type: application/json` 같은 특정 값이 포함될 때

💡 **Preflight Request 흐름**
1. 클라이언트가 서버에 `OPTIONS` 요청을 보냄 (이 요청은 데이터를 포함하지 않음)
2. 서버가 응답 (`Access-Control-Allow-Origin` 등 허용 여부 전달)
3. 브라우저가 확인 후 실제 요청을 보냄

✔ **해결 방법**
- 서버에서 `OPTIONS` 요청에 대한 응답을 설정해야 합니다.

---

## 4️⃣ Proxy 서버로 CORS 우회하기
CORS 문제를 해결하는 방법 중 하나가 **Proxy 서버**를 활용하는 것입니다.

✔ **Proxy 서버란?**
- 클라이언트와 외부 서버 사이에서 **중간 다리 역할**을 하는 서버
- 클라이언트는 Proxy 서버에 요청을 보내고, Proxy 서버가 대신 외부 서버에 요청을 전달

💡 **프록시 서버 설정 예시 (React에서 사용)**
👉 `package.json` 파일에 추가
```json
"proxy": "https://my-backend.com"
```
이렇게 하면 **브라우저가 같은 출처라고 인식**해서 CORS 문제가 발생하지 않습니다.

---

## 5️⃣ CORS를 차단하는 이유: CSRF 공격 방지
CORS는 **보안을 위해 기본적으로 차단**됩니다. 특히 **CSRF(Cross-Site Request Forgery)** 공격을 방지하기 위함입니다.

✔ **CSRF란?**
- 공격자가 사용자의 로그인 상태를 악용하여 **원하지 않는 요청을 서버에 보내는 공격**
- 예를 들어, 사용자가 로그인한 상태에서 악성 사이트에 방문하면, 공격자가 사용자의 계정으로 송금 요청을 보낼 수도 있음

💡 **CORS 차단이 없다면?**
- 공격자가 **사용자 모르게 요청을 보내는 CSRF 공격이 가능**해집니다.
- 그래서 브라우저는 CORS 정책을 적용하여 **무분별한 요청을 제한**합니다.


---

## 🚀 정리
✔ **SOP**: 같은 출처에서만 리소스 요청 가능
✔ **CORS**: 서버에서 허용하면 다른 출처에서도 요청 가능
✔ **Preflight Request**: 민감한 요청 전에 브라우저가 확인하는 과정
✔ **Proxy 서버**: CORS 문제를 우회하는 방법
✔ **CORS 차단 이유**: CSRF 공격을 방지하기 위함



<!-- 섹션17 CORS와 Proxy 서버 노션 참조 -->