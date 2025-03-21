//1. 함수 표현식 
function funcA(){
    // console.log("funcA");
    
}

let varA = funcA;
varA();

let varB = function (){ //익명함수
    // console.log("functionB");
};

varB();
//익명함수 같은 경우, 변수의 값으로서 함수가 소환된 것이기 떄문에 변수명으로서만 함수 활용이 가능하다.


//2. 화살표 함수 
let varC = (value) => {
    console.log(value);
    
    return value + 1;
};

console.log(varC(10));

let varD = function(value){
    console.log(value);
    return value + 1;
}

varD(2);
