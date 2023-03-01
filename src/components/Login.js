import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const login = () => {
        axios({
            method: "POST", 
            data: {
                username: loginUsername,
                password: loginPassword
            },
        withCredentials: true, 
        url: "http://localhost:3001/login"
        }).then((res) => console.log(res))
    }
  return (
    <div>
        <h1>Log In</h1>
        <input placeholder='username' onChange={e =>  setLoginUsername(e.target.value)}/>
        <input placeholder='password'onChange={e =>  setLoginPassword(e.target.value)}/>
        <input type='submit' onClick={login}/>
    </div>
  )
}

export default Login