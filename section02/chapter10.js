// 1. Date 객체를 생성하는 방법
let date1 = new Date() //생성자 
console.log(date1);

let date2 = new Date("2001-04-17");
console.log(date2);


// 2. 타임 스탬프 
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값(UTC)
let ts1 = date1.getTime();
console.log(ts1);
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법 
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();


// 4. 시간 수정하기
date1.serFullTear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocalString());

