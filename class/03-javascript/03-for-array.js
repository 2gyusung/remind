const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]

// for문 예제
for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
    console.log(`과일 차트${fruits[i].number}위는 ${fruits[i].title}입니다 `)
}

// 실무
String(Math.floor(Math.random() * 100000))
String(Math.floor(Math.random() * 100000)).padStart(6,'0')
