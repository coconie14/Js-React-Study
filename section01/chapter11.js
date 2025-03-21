//함수

function getArea(width, height) { //들어가는 변수를 매개변수라고 한다. 
    function another(){ //중첩 함수
        console.log("another");
    }    

    another();

    let area = width * height;
    console.log(area);

    return area;
    //반환값 -> 함수의 결과값
    //리턴을 하면 그 함수는 즉시 종료된다.
    console.log("hello");
    
}

let area1 = getArea(10,20);
console.log(area1);

getArea(20, 40);



//함수에 들어가는 값들을 인수라고 부른다.
getArea(30, 20);


//호이스팅 
// -> 끌어올리다 라는 뜻
// 선언문보다 함수를 먼저 사용해도 오류없이 실행이 된다. 

