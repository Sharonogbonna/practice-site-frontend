import React from 'react'
import axios from 'axios'


function GetUser() {
    const getUser = () => {
        axios({
            method: "get", 
        withCredentials: true, 
        url: "http://localhost:3001/user"
        }).then((res) => console.log(res))
    }
  return (
    <div>
        <h1>GetUser</h1>
        <input type="submit" onClick={getUser}/>
    </div>
  )
}

export default GetUser