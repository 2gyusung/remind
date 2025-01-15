# `ref / reactive() 차이점`
```
ref()에서는 String , Number , object 등 어떤 타입든 사용 가능합니다.
reactive()에서는 object타입만 가능합니다. (object, Array ,Map , Set)
ref() .value를 통해서 접근할 수 있고 , reactive()는 붙이지 않아도 그냥 접근 가능.
reactive()를 함수를 넣을 수 있습니다.
object일 경우 ref()는 재할당 하면 반응형 유지하지만 reactive()를 재할당하면 반응형을 잃어버립니다
```

```
둘다 반응형 데이터 작성이 가능하며 반응형 프록시를 얻을 수 있습니다.
reactive는 일반 변수와 같이 변수명을 그대로 가져다 쓸 수 있으므로 ref()를 쓰는 것이 ref변수명.value라고 접근이
가능해서 차별화를 둘 수 있으므로 가독성 및 유지보수에 졸다?
```


# `ref의 장점`
```
타입 제한 없이 사용 가능함
템플릿에서 단일 변수로 사용할 수 있음
```

# `reactive의 장점`
```
자바스크립트와 템플릿 사이에 일관성이 있음
반응형 변수를 많이 선언할 때 간단하게 사용 가능
Vue2의 data()와 비슷함
```


## 🚀 **Vue `ref`와 `reactive` 요약**

---

## 🟢 **`ref` (레프)**  

**👉 단일 값(숫자, 문자열, 객체 등)을 반응형으로 만들 때 사용!**

- **주로 원시 값**(숫자, 문자열, 불리언 등)이나 **객체 하나**를 감싸기 위해 사용돼요.  
- `.value`를 사용해 실제 값을 접근하거나 수정할 수 있어요.

### ✅ **예시**

```vue
<script setup>
import { ref } from 'vue';

const count = ref(0); // 숫자 값을 반응형으로 만듦

function increment() {
  count.value++; // .value로 값을 접근하고 수정
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increase</button>
</template>
```

**📝 요약:**  
- `ref`는 **값을 감싸서 반응형으로 만든다.**  
- `.value`로 값을 접근하거나 수정한다.

---

## 🟠 **`reactive` (리액티브)**  

**👉 여러 속성을 가진 **객체**를 반응형으로 만들 때 사용!**

- **객체나 배열**을 반응형으로 만들 때 유용해요.  
- `.value`를 사용하지 않고 바로 속성에 접근할 수 있어요.

### ✅ **예시**

```vue
<script setup>
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Vue'
});

function increment() {
  state.count++; // 바로 속성에 접근해서 수정
}
</script>

<template>
  <p>Count: {{ state.count }}</p>
  <p>Name: {{ state.name }}</p>
  <button @click="increment">Increase</button>
</template>
```

**📝 요약:**  
- `reactive`는 **객체나 배열을 반응형으로 만든다.**  
- 속성에 바로 접근해서 사용할 수 있다.

---

## 🗂️ **`ref` vs `reactive` 비교**

| **구분** | **ref** | **reactive** |
|----------|---------|-------------|
| **대상** | 원시 값, 객체 | 객체, 배열 |
| **접근 방식** | `.value` 사용 | 속성에 직접 접근 |
| **사용 사례** | 숫자, 문자열, 불리언 등 | 여러 속성을 가진 객체 |

---

### 🧠 **쉽게 기억하기!**
- **ref** →  **"하나의 값"**을 반응형으로!  
- **reactive** →  **"여러 속성(객체)"**을 반응형으로!
