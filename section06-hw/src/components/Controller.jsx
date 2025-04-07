import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0);
    const onChange = (e) => {
        setCount()
    }
    return(
        <div>
            <button onClick={setCount(count -1)}>-1</button>
            <button>-10</button>
            <button>-100</button>
            <button>+100</button>
            <button>+10</button>
            <button>+1</button>
        </div>
    )
}


export default Counter;
