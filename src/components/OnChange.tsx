import React, {useState} from "react";

const OnChange= () =>{

    const [user, setUser] = useState("");

    const handler= (e:any) => {
        setUser(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="username" value={user} name="user" 
            onChange={handler} /> <br>
            </br>

            {user}
        </div>
    )
}

export default OnChange