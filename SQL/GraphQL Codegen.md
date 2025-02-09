# GraphQL Codegen

## ✨ GraphQL Codegen이란?
GraphQL Codegen은 **GraphQL API에서 TypeScript 타입, API 요청 코드, React Hooks 등을 자동으로 생성하는 도구**입니다. 이를 활용하면 백엔드와 프론트엔드 간의 타입 일관성을 유지하면서, API 요청을 더 쉽게 사용할 수 있습니다.

---

## ✅ GraphQL Codegen의 주요 기능
1. **GraphQL 타입을 자동으로 TypeScript 타입으로 변환**
2. **Apollo Client용 Hooks 자동 생성** (`useQuery`, `useMutation` 등)
3. **API 요청 코드 자동 생성** (fetch, axios 기반)
4. **프론트엔드 & 백엔드 간 타입 일관성 유지**

---

## 🚀 GraphQL Codegen 사용법

### 1. **설치하기**
```bash
npm install -D @graphql-codegen/cli
```

### 2. **설정 파일 만들기 (`codegen.yml`)**
```yaml
schema: "https://example.com/graphql"  # GraphQL 서버 주소
documents: "src/**/*.graphql"           # 우리가 만든 GraphQL 쿼리 파일
generates:
  src/generated/graphql.tsx:
    plugins:
      - "typescript"                   # TypeScript 타입 생성
      - "typescript-operations"        # GraphQL 쿼리 결과 타입 생성
      - "typescript-react-apollo"      # Apollo Client용 React Hooks 생성
```

### 3. **GraphQL 쿼리 작성 (`src/queries.graphql`)**
```graphql
query GetUsers {
  users {
    id
    name
    age
  }
}
```

### 4. **Codegen 실행하기**
```bash
npx graphql-codegen --config codegen.yml
```
Codegen이 자동으로 TypeScript 타입과 API 요청 코드를 생성합니다!

---

## 🌟 Codegen이 생성한 코드 활용하기
```tsx
import React from "react";
import { useGetUsersQuery } from "./generated/graphql";

const UserList = () => {
  const { data, loading, error } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
```

---

## 🔍 Codegen을 사용하면?
| ✅ Codegen 없이 | ✅ Codegen 사용 |
|---------------|---------------|
| API 요청 함수를 직접 작성해야 함 | API 요청 코드 자동 생성 |
| TypeScript 타입을 직접 정의해야 함 | GraphQL 스키마에서 자동 생성 |
| API가 바뀌면 수동으로 코드 수정 | 변경 사항이 자동 반영됨 |

### 🚀 **GraphQL Codegen을 사용하면 코드 작성이 쉬워지고 유지보수도 편해집니다!**

