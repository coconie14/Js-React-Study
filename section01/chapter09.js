// 1. if 조건문 (if문)
// 반드시 if로 시작해 else로 끝나야한다. 
let num = 9;

if (num >= 10){
    // console.log("num은 10 이상입니다.");
    // console.log("조건이 참 입니다.");
}
else if (num >= 5){
    // console.log("num은 5 이상입니다.");
}
else{
    // console.log("조건이 거짓입니다.");
}


//2. Switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
// case문은 기본적으로 조건들을 위에서 아래로 훑는다. 
// 이때 참인 항을 발견하면 그 이후도 모두 실행되기 때문에 break문 사용
// 만약 조건이 참인 게 없다면 default를 이용하면 else문 처럼 사용할 수 있다. 


let animal = "horse";

switch(animal){
    case "cat" : {
        console.log("고양이");
        break;
    }
        case "dog":{
            console.log("강아지");
            break;
        }
            case "bear":{
                console.log("곰");
                break;
                
            }
                case "sanke":{
                    console.log("뱀");
                    break;
                }
                    case "tiger":{
                        console.log("호랑이");
                        break;
                    }
                    default:{
                        console.log("그런 동물은 전 모릅니다.");
                        
                    }
}

