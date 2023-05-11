import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
const AdminSignup=()=> {
   
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const navigate=useNavigate();
  const handelSubmit=()=>{
    axios.post("http://localhost:3000/api/admin",{
      adminname:name,
      adminmail:email,
      adminpw:password
    })
    .then((suc)=>{
        navigate('/loginAdmin')
        console.log(suc)
        
    })
    .catch(err=>console.log(err))
      }
      console.log(email)
  return(
    <div className='sign'>
      <h3>Sign up Admin</h3>
        <input type="text" className='inp' placeholder='User Name'onChange={e=>setName(e.target.value)}/><br />
        <input type="password" className='inp' placeholder='User Password'onChange={e=>setPassword(e.target.value)}/><br />
        <input type="email" className='inp' placeholder='User E-mail'onChange={e=>setEmail(e.target.value)}/><br />
        <input type="button" className='btn' value="submit" onClick={handelSubmit}/>
    </div>
  )
}
export default AdminSignup