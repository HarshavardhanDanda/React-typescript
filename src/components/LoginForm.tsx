import React,{useState} from 'react'

const LoginForm = () => {
    const [data,setData] = useState({
        username:'',
        password:''
    })

    const {username, password}= data;
    const changeHandler = (e:any) => {
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const submitHandler = (e:any) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
        <br></br><br></br>
            <input type="text" name="username" value={username} onChange={changeHandler}/><br></br><br></br>
            <input type="text" name="password" value={password} onChange={changeHandler}/><br></br><br></br>

            <input type="submit" name="submit" />
        </form>
    </div>
  )
}

export default LoginForm
