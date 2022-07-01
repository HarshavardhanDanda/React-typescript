import React,{useState} from 'react'

const Calculator = () => {

    const [input,setInput] = useState("")

    const handler = (e:any) =>{//onchange handler
        setInput(e.target.value)
    }
    const [result,setResult]=useState(0)
    
  return (
    <div>
        <input type="text" value={input} onChange={handler}/>  <br></br>
        <button onClick={() => setResult(eval(input))}>Result</button>  <br></br>
        <h2>Result is: {result}</h2>

        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button><br></br>
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'0')}>0</button><br></br>
        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button>
        <button onClick={() => setInput('')}>clr</button>
        
    </div>
  )
}

export default Calculator