// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

//상수여도 프로퍼티를 관리하는 것은 모두 가능하다.
animal.age = 2; //추가
animal.name = "까망이" //수정
delete animal.color; //삭제


console.log(animal);


// 2. 메서드 
// -> 값이 함수인 프로퍼티를 말한다. 
const person = {
    name : "유시연",
    //메서드
    sayHi : function () {
        console.log("안녕!");
    },
    //메서드 선언 
    //sayHi() {
    // console.log("안녕");
    // }
};
//함수가 아닌 값들은 객체의 정보를 갖고있고, 
//메서드는 객체의 동작을 정의한다. 


person.sayHi();
person["sayHi"]();