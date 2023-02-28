import React, { useState } from 'react'

function Register() {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
  return (
    <div>
        <h1>Register</h1>
        <input placeholder='username'/>
        <input placeholder='password'/>
    </div>
  )
}

export default Register