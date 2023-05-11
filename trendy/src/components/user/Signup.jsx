import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Signup=()=> {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const navigate = useNavigate();
  const[error,setError]=useState("")
  const handelSubmit=()=>{
    axios.post("http://localhost:3000/api/users",{
      username:name,
      useremail:email,
      userpw:password
    })
    .then(suc=>{console.log(suc)
      navigate('/login')})
    .catch(err=>{console.log(err)
    setError(err.response.data)})
      }
      const handleLoginClick = () => {
        navigate('/login');
      };
      console.log(error)
  return(
    <div className='sign'>
      <h3>Sign up</h3>
        <input type="text" className='inp' placeholder='User Name'onChange={e=>setName(e.target.value)}/><br />
        <input type="password" className='inp' placeholder='User Password'onChange={e=>setPassword(e.target.value)}/><br />
        <input type="email" className='inp' placeholder='User E-mail'onChange={e=>setEmail(e.target.value)}/><br />
        <input type="button" className='btn' value="submit" onClick={handelSubmit}/>
        <input type="button" className='btn' value="already have an account" onClick={handleLoginClick}/><br />
        <h4>{error}</h4>
    </div>
  )
}
export default Signup