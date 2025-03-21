//1. 대입 연산자 
let var1 = 1;

//2. 산술 연산자 
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; //모듈러 연산자라고도 부른다.

let num6 = (1 + 2) * 10;

//3. 복합 대입 연산자 
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 &= 10;


//4. 증감 연산자
 let num8 = 10;
 num8++;
 console.log(num8);
 //증감 연산자를 변수명 앞에다 붙여주면 이 라인에서 즉시 연산이 이루어진다.(전위 연산)
 //증감 연산자를 변수명 뒤에다 붙여주면 다음 라인에서 연산이 이루어진다.(후위 연산)


// 5. 논리 연산자 
let or = true || false;
//하나만 참이 되어도 참

let and = true && false;
//둘 모두 참이어야 참으로 나온다.
let not = !true;
// 반대로 바꿔준다.


//6. 비교 연산자 
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;



 
