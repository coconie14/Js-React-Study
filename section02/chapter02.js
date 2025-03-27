//단락 평가 활용 사례 

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음 ");
    //person의 값이 없을 때 undefined일 경우 첫번째가 false이 되어 두번째 값이 반환
    //person의 값이 있으면 바로 name의 값을 반환하는 것이다. 
    
}

printName();
printName({name:"이정환"});