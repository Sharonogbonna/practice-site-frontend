import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const register = () => {
        axios({
            method: "post", 
            data: {
                username: registerUsername,
                password: registerPassword
            }
        ,
        withCredentials: true, 
        url: "http://localhost:3001/register"
        }).then((res) => console.log(res))
    }
  return (
    <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e =>  setRegisterUsername(e.target.value)} />
        <input placeholder='password'onChange={e =>  setRegisterPassword(e.target.value)}/>
        <input type='submit' onClick={register}/>
    </div>
  )
}

export default Register