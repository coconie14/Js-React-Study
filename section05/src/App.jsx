import "./App.css"
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0);//두개의 값을 담은 배열을 반환해준다. 하나는 현재 상태를 담은 값과 변화시킬 상태 변화 함수. 
  const [light, setLight] = useState("OFF");
  console.log(count);
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light ==='ON' ? "OFF" : "ON")
      }}>{light ==="ON" ? "끄기" : "켜기"} </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }
      }>+</button>
    </div>
      
    </>
  );
}

export default App;
