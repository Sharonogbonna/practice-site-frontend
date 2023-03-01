import React, { useState } from 'react'
import axios from 'axios'


function GetUser() {
    const [data, setData] = useState(null)
    const getUser = () => {
        axios({
            method: "GET", 
        withCredentials: true, 
        url: "http://localhost:3001/user"
        }).then((res) => setData(res.data))
    }
  return (
    <div>
        <h1>GetUser</h1>
        <input type="submit" onClick={getUser}/>
        {console.log(data)}
        {data ?  <h1>Welcome Back {data.username}</h1>: null}
    </div>
  )
}

export default GetUser