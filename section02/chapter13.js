// 비동기 작업 처라하기 2.Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체 
// Promise의 효능 1. 비동기 작업 실행 2. 비동기 작업 상태 관리 3. 비동기 작업 결과 저장 4. 비동기 작업 병렬 실행
// 5. 비동기 작업 다시 실행 6. 기타 등등 
// 대기 상태 , 성공 , 실패 

function add10(num){
    const promise = new Promise((resolve, reject)=> {
        // 비동기 작업 실행하는 함수 
        // executor
    
        setTimeout(()=>{
    
            if(typeof num === 'number'){
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);
    
    add10(result)
    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
        
    });
    return newP;
});



// then 메서드
// -> 그 후에 
// chaining
// promise.then((value)=>{
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })

// promise.catch((error) => {
//     console.log(error);
// });