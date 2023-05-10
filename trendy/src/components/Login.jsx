import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const[tokken,setTokken]=useState("")

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        useremail: email,
        userpw: password
      });

      const token = response.data.token;
    //   setTokken(token)
     

      console.log('Authentication successful');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="login-form">
      <h3>Login</h3>
      <input  type="email" className='inp' placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className='inp' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="button" className='btn' value="submit" onClick={handleLogin}/>
    </div>
  );
};

export default Login;