import React, { useState } from 'react'
import axios from "axios"

const Login=()=> {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  return(
    <div className='login'>
      <h3>Login</h3>
        <input type="text" className='inp' placeholder='User Name'/><br />
        <input type="password" className='inp' placeholder='User Password'/><br />
        <input type="email" className='inp' placeholder='User E-mail'/><br />
        <input type="button" className='btn' value="submit" />
    </div>
  )
}
export default Login