import React, { useState } from 'react'

function Login() {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
  return (
    <div>
        <h1>Log In</h1>
        <input placeholder='username'/>
        <input placeholder='password'/>
    </div>
  )
}

export default Login