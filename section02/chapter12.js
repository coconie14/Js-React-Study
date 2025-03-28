// 비동기 작업 처리 1.콜백함수 
function add(a, b, callback){
    setTimeout( () => {
        const sum = a + b;
        callback(sum);
        
    }, 3000);
}

add (1, 2, (value) => {
    console.log(value);
    
});

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        setTimeout(()=>{
            const food = "떡볶이";
            callback(food)
        })
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
       const freeezdFood = `냉동된 ${food}`; 
       callback(freeezdFood)
    }, 1500);
}

orderFood((food) => {
    console.log(food);
    
    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freeezdFood) => {
            console.log(freeezdFood);
        })
        
    })
})

// 어떤 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 활용하는 실습 *연습필요*
// 콜백 지옥을 피하기 위해서는 promised를 사용해야한다. 