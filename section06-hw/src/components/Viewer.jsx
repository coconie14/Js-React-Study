import { useState } from "react";

const result = () => {
    const [result, setResult] = useState(0);

    return(
        <div>
            <div>현재 카운트:</div>
            <div>{Count}</div>
        </div>
        
    )
}

export default result;
