// Spread 연산
// -> Spread : 흩뿌리다, 펼치다 라는 뜻 
// -> 객체느 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);


let obj1 = {
    a: 1,
    b : 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};


function funcA(p1, p2, p3){
    console.log(p1, p2, p3);
}

funcA(...arr1)



//2. Rest 매개변수 
//-> Rest는 나머지, 나머지 매개변수 
//이름은 상관없고 ... 다음에 붙이고 싶은 이름을 붙여놓으면 된다. 

function funcB(one, ...rest){
    console.log(rest);
}

funcB(...arr1)