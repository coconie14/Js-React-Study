// 5가지 요소 순회 및 탐색 메서드 
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item*2);
});

let doubledArr = [];
arr1.forEach( (item)=>{
    doubledArr.push(item * 2);
})

console.log(doubledArr);

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(2);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스 (위치)를 찾아서 반환하는 메서드
// 존재하지 않으면 -1이라는 값을 반환한다. 
// 얕은 비교로 움직이기 때문에 객체의 값을 찾아내지 못하지만 
// findIndex는 객체도 찾아낼 수 있다. 
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);


let objectArr = [
    {name : "이정환"},
    {name : "홍길동"},
];

console.log(
    objectArr.indexOf({name : "이정환"})
);

console.log(
    objectArr.indexOf(
        (item) => item.name === "이정환"
    )
);



// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 조건을 만족하지 않으면 -1의 값을 반환한다.
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=> item & 2 !== 0);

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name : "이정환"},
    {name : "홍길동"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"
);

console.log(finded);
