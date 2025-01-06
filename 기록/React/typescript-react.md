
```
yarn add @types/react @types/react-dom

yarn add typescript



tsconfig.json
@tsconfig/create-react-app npm 사이트 검색 후 tsconfig 파일 생성해서 붙여놓기 한다.

jsx 확장자로 변경한다


```

# 📘 **React 프로젝트에 TypeScript 적용하기**

React 프로젝트에 TypeScript를 적용하여 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다. 아래 단계에 따라 설정을 진행하세요.

---

## 🚀 **1. TypeScript 및 타입 패키지 설치**

TypeScript와 React 타입 정의 파일을 설치합니다.

```bash
yarn add typescript @types/react @types/react-dom --dev
```

- **`typescript`**: TypeScript 컴파일러  
- **`@types/react`, `@types/react-dom`**: React 및 ReactDOM에 대한 TypeScript 타입 정의

---

## 🛠️ **2. tsconfig.json 설정**

TypeScript 설정 파일(`tsconfig.json`)을 생성합니다.

### **2.1. tsconfig 설정 예시**

`@tsconfig/create-react-app`을 참고하여 설정합니다.

```json
{
  "extends": "@tsconfig/create-react-app/tsconfig.json",
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

- **`@tsconfig/create-react-app` 참고**: [npm 사이트 링크](https://www.npmjs.com/package/@tsconfig/create-react-app)

---

## 📝 **3. 파일 확장자 변경**

기존 JavaScript 파일(`.js`/`.jsx`)을 TypeScript 파일(`.ts`/`.tsx`)로 변경합니다.

- **컴포넌트 파일**: `.jsx` → `.tsx`  
- **일반 스크립트 파일**: `.js` → `.ts`

### 예시

**Before**: `App.jsx`  
**After**: `App.tsx`

---

## 🏗️ **4. 프로젝트 실행 및 확인**

TypeScript 설정이 올바르게 적용되었는지 확인합니다.

```bash
yarn start
```

브라우저에서 오류가 없는지 확인하세요.

---

## 📂 **5. 타입스크립트 적용 예제**

### **5.1. 기본 컴포넌트 타입 지정**

```tsx
import React from 'react';

interface Props {
  message: string;
}

const Greeting: React.FC<Props> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default Greeting;
```

---

## ✅ **6. ESLint 및 Prettier 설정 (선택 사항)**

TypeScript를 더 잘 활용하기 위해 ESLint와 Prettier를 함께 설정하는 것을 권장합니다.

```bash
yarn add eslint prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

---


---


