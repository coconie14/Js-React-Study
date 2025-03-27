// 자바스크립트에서 원시타입과 객체타입을 분리한 이유는
// 둘이 값이 저장되거나 복사되는 과정이 서로 다르기 때문이다.
// 원시타입 : 값 자체로써 변수에 저장되고 복사 된다. - 실제 메모리에 저장된 원본값이 변경되지 않기 때문에 불변값이라고도 불린다.
// 객체타입 : 참조값을 통해 변수에 저장되고 복사된다. - 메모리에 저장된 원본값을 변경하고, 그 원본값의 주소를 변수에 보내주기 때문에 가변값이라고도 불린다. 

// 객체타입 주의사항1. 의도치 않기 값이 수정될 수 있다. 
let o1 = {name : "이정환"};
// let o2 = o1;
// o2.name = "홍길동";
// 이렇게 하면 의도치 않게 o1의 값도 바뀔 수도 있다. 이걸 사이드이펙트라고 불린다. 얕은 복사
// 원본 객체가 수정될 수 있어 위험하다 
let o2 = {...o1};
// 깊은 복사, 새로운 객체를 새성하면서 프로퍼티만 따로 복사한다. 
// 원본 객체가 수정될 일이 없어 안전하다.

//객체타입 주의사항2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다. 
let a1 = {name: "이정환"};
let a2 = a1;
let a3 = {...a1};

console.log(a1 === a2); //참
console.log(a1 === a3); //거짓 
//얕은 비교
console.log(
    JSON.stringify(a1) === JSON.stringify(a3)
);
// JSON.stringify() 자바스크립트 내장 함수 객체를 문자열로 변환하는 기능 
// 깊은 비교 

//객체타입 주의사항3. 배열과 함수도 사실 객체이다.
