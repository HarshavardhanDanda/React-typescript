import React, {useState} from "react";

const States = () =>{

    const [name, setName] = useState("my name is harsha")

    const [count, setCount] =useState(0)
    return(
        <div>
            
            <h1>{name}</h1>
            <button onClick={() => setName("my age is 21")}>Change</button>

            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Change</button>
            
        </div>
    )
}

export default States