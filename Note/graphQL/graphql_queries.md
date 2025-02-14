
# GraphQL Queries for API Interaction

## 1) 철수의 나이는 몇 살인가요? (나이만 조회해 주세요.)
```graphql
query {
  fetchProfile(name: "영희") {
    age
  }
}
------------------------------
{
  "data": {
    "fetchProfile": {
      "age": 12
    }
  }
}

```

## 2) 영희의 학교는 어디인가요? (학교만 조회해 주세요.)
```graphql
query {
  fetchProfile(name: "영희") {
    school
  }
}
------------------------------

{
  "data": {
    "fetchProfile": {
      "school": "다람쥐중학교"
    }
  }
}
```

## 3) 3번 게시글의 내용과 작성일이 무엇인가요? (내용과 작성일만 조회해 주세요.)
```graphql
query{
  fetchBoard(number:1){
    createdAt
    contents
  }
}
------------------------------

{
  "data": {
    "fetchBoard": {
      "createdAt": "2024-11-09T10:13:50.198Z",
      "contents": "반갑습니다"
    }
  }
}
```

## 4) 본인의 이름으로 프로필을 작성해 보세요.
```graphql
mutation {
  updateProfile (
    name : "이구상",
    age :100000,
    school : "보문"
  ) {

    message
  }
}
------------------------------

{
  "data": {
    "updateProfile": {
      "message": "프로필이 정상적으로 수정되었습니다."
    }
  }
}
```

## 5) 본인의 이름으로 게시글을 작성해 보세요.
```graphql
mutation {
  createBoard (
    writer : "이구상",
    title :"성심당",
    contents :"성심당은 딸기시루"
  ) {

  _id
    number
    message
  }
}

------------------------------
{
  "data": {
    "createBoard": {
      "_id": null,
      "number": 244,
      "message": "게시물이 정상적으로 등록되었습니다."
    }
  }
}
```

## 6) 자신의 프로필을 조회해 보세요.
```graphql
query {
  fetchProfile(name: "이구상"){
    number
    name
    age
    school  
  }
  
}

------------------------------


{
  "data": {
    "fetchProfile": null
  }
}
```

## 7) 자신의 게시글을 조회해 보세요.
```graphql
query {
  fetchBoard(number: 244){
        number
    writer
    title
    contents
    like
    createdAt
  }
  
}
-------------------------------------
{
  "data": {
    "fetchBoard": {
      "number": 244,
      "writer": "이구상",
      "title": "성심당",
      "contents": "성심당은 딸기시루",
      "like": 0,
      "createdAt": "2025-02-14T06:05:03.175Z"
    }
  }
}
```

## 8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.
```graphql
mutation {
 updateProfile(
    school:"보문초",
    age :100000,
     name : "이구상",
  ){
    _id
    number
    message
  }
}

-------------------------------------


{
  "data": {
    "updateProfile": {
      "_id": null,
      "number": null,
      "message": "프로필이 정상적으로 수정되었습니다."
    }
  }
}
```

## 9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.
```graphql
mutation {
  updatePost(id: "게시글 ID", title: "새로운 제목", content: "새로운 내용") {
    id
    title
    content
  }
}
```

## 10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.
```graphql
mutation {
  createProfile(name: "만화 주인공 이름") {
    id
    name
  }
}
```

## 11) 위 10번에서 작성한 프로필을 삭제해 보세요.
```graphql
mutation {
  deleteProfile(id: "만화 주인공 프로필 ID") {
    id
    name
  }
}
```

## 12) 상품을 하나 만들어 보세요.
```graphql
mutation {
  createProduct(name: "상품 이름", price: 1000) {
    id
    name
    price
  }
}
```

## 13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.
```graphql
mutation {
  updateProduct(id: "상품 ID", price: 1500) {
    id
    name
    price
  }
}
```

## 14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.
```graphql
query {
  product(id: "상품 ID") {
    price
  }
}
```

## 15) 조회했던 상품을 삭제해 보세요.
```graphql
mutation {
  deleteProduct(id: "상품 ID") {
    id
    name
  }
}
```

## 16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.
```graphql
query {
  product(id: "상품 ID") {
    id
    name
  }
}
```

## 17) 게시물 목록 중, 2페이지를 조회해 보세요.
```graphql
query {
  posts(page: 2) {
    id
    title
    content
  }
}
```

## 18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?
```graphql
query {
  posts {
    id
    title
    content
  }
}
```

## 19) 프로필이 전체 몇 개가 있는지 확인해 보세요.
```graphql
query {
  profilesCount
}
```

## 20) 게시물은 몇 개가 있나요?
```graphql
query {
  postsCount
}
```

