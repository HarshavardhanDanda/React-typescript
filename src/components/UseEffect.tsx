import React, {useState, useEffect} from "react";

const UseEffect = () =>{

    const [count, setCount] =useState(0)
    useEffect(() => console.log("clicked"),[count])
    return(
        <div>
        
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Change</button>
            
        </div>
    )
}
//use effect runs after the return statement is executed only once if dependencies are not given
export default UseEffect