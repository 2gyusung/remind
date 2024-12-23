 ```cmd
 npx create-next-app

 yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact

 yarn add @emotion/react
 ```

 ## 🚀 **Next.js 12.1.0, React 17.0.2, Emotion 설치 가이드**

---

## 📦 **설치 명령어**

1. **Next.js 프로젝트 생성**  
```bash
npx create-next-app
```

2. **Next.js 및 React 버전 명시적 설치**  
```bash
yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact
```

3. **Emotion 설치**  
```bash
yarn add @emotion/react
```

---

## ⚙️ **설치 명령어 설명**

1. **`npx create-next-app`**  
   - Next.js 프로젝트를 생성합니다.  
   - `package.json`, 기본 디렉터리 구조 등이 자동으로 설정됩니다.  

2. **`yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact`**  
   - Next.js 버전을 `12.1.0`으로 고정합니다.  
   - React와 React-DOM 버전을 `17.0.2`로 고정합니다.  
   - `--exact` 옵션은 정확한 버전을 강제합니다.  

3. **`yarn add @emotion/react`**  
   - Emotion은 CSS-in-JS 라이브러리로, 컴포넌트 단위로 스타일을 관리할 수 있습니다.  

---

## 🛠️ **프로젝트 확인**

### 📂 **프로젝트 폴더 구조**
```plaintext
my-next-app/
├── node_modules/
├── pages/
├── public/
├── styles/
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

### 📄 **package.json** 주요 의존성 예시:
```json
{
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "@emotion/react": "^11.x.x"
  }
}
```

---

## ▶️ **프로젝트 실행**

개발 서버를 실행하여 설치가 잘 되었는지 확인합니다:

```bash
yarn dev
```

브라우저에서 `http://localhost:3000`으로 이동하여 Next.js 애플리케이션이 정상적으로 실행되는지 확인하세요.

---

### 🎯 **설치 완료 후 확인 사항**
- `yarn dev` 명령어로 프로젝트가 정상적으로 실행되는지 확인  
- Next.js, React, Emotion의 버전이 올바르게 설치되었는지 `package.json`에서 확인  

---


