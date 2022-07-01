import React, {useState} from "react";

const OnSubmit = () => {
     const [data, setData] = useState({
         username:"",
         password:"",
     })

     const{username, password} =data;//object destructuring
     const onChange = (e:any) => {
         setData({...data,[e.target.name]:[e.target.value]})
     }

     const submitHandler = (e:any) => {
         e.preventDefault();
         console.log(data);
     }

     return(
         <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" value={username}
                onChange={onChange} placeholder="username" /><br></br>

                <input type="text" name="password" value={password}
                onChange={onChange} placeholder="password" /><br></br>

               <input type="submit" name="submit" />
             </form>
         </div>
     )
}

export default OnSubmit