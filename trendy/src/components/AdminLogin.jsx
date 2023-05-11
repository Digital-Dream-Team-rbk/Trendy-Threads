import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
 const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =async ()=>{
    try {
      if(email==="" || password===""){
        return alert("fill the rows please")
      }
       const response= await axios.post('http://localhost:3000/api/admin/login', {
        adminmail: email,
        adminpw: password
      })
      if (response.data === "you are logged") {
        navigate("/homeAdmin");
      } else {
        alert(response.data);
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="login-form">
      <h3>Login Admin</h3>
      <input  type="email" className='inp' placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className='inp' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="button" className='btn' value="submit" onClick={handleLogin}/>
      <button className='btn'onClick={(e)=>(navigate('/signUpAdmin'))}>Sign Up?</button>
    </div>
  );
};

export default AdminLogin;