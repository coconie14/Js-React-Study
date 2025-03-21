// 1. 콜백함수 
function main(value){
    value();
}

function sub(){
    console.log("i am sub");
    
}

main(sub);
// 콜백 함수는 메인 함수가 언제든지 원하는 타이밍에 실행시킬 수 있다. 

main(function sub(){
    console.log("i am sub"); 
});

// -> 단축 
main(() => {
    console.log("i am sub"); 
});

// 2. 콜백함수의 활용 
function repeat(count, callback){
    for(let idx =1; idx <= count; idx++){
        callback(idx);
        
    }
}

function repeatDouble(count){
    for(let idx =1; idx <= count; idx++){
        console.log(idx * 2);
        
    }
}


repeat(5, function (idx) {
    console.log(idx); 
});

repeat(5, (idx) => {
    console.log(idx * 3);
})

