import React, { useState } from 'react'
import axios from "axios"

const Login=()=> {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const handelSubmit=()=>{
    axios.post("http://localhost:3000/api/users",{
      username:name,
      useremail:email,
      userpw:password
    })
    .then(suc=>{console.log(suc)})
    .catch(err=>console.log(err))
      }
      console.log(email)
  return(
    <div className='sign'>
      <h3>Sign up</h3>
        <input type="text" className='inp' placeholder='User Name'onChange={e=>setName(e.target.value)}/><br />
        <input type="password" className='inp' placeholder='User Password'onChange={e=>setPassword(e.target.value)}/><br />
        <input type="email" className='inp' placeholder='User E-mail'onChange={e=>setEmail(e.target.value)}/><br />
        <input type="button" className='btn' value="submit" onClick={handelSubmit}/>
    </div>
  )
}
export default Login