import React,{useState} from 'react'

const SignupForm = () => {

  const [data, setData] = useState({ name:"",
  birthdate:'',
  email:'',
  password:'',
  passwordCheck:''
})
 
  const {name,birthdate,email,password,passwordCheck} = data; //object destructuring

  const changeHandler = (e:any) =>{
      setData({...data,[e.target.name]:e.target.value})//value should not be in square braces
  }

  const submitHandler = (e:any) =>{
      e.preventDefault()
      if(password===passwordCheck){
        console.log(data)
      }else{
         alert("password mis-match")
      }   
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <br></br>
            Name: <input type="text" name="name" value={name} onChange={changeHandler} placeholder="name"/>   <br></br><br></br>
            DOB: <input type="date" name="birthdate" value={birthdate} onChange={changeHandler} placeholder="Date of Birth"/>   <br></br><br></br>
            Email: <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email"/>   <br></br><br></br>
            Password: <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password"/>  <br></br><br></br>
            confirm password: <input type="password" name="passwordCheck" value={passwordCheck} onChange={changeHandler} placeholder="Re-enter password"/> <br></br><br></br>
            {password !== passwordCheck ? <p style={{"color":"red"}}>passwords not matching</p>:null}
            <input type="submit" name="submit" />
        </form>
    </div>
  )
}

export default SignupForm
