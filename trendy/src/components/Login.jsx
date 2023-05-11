import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const[error,setError]=useState("")
//   const[tokken,setTokken]=useState("")

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        useremail: email,
        userpw: password
      });

      const token = response.data.token;
    //   setTokken(token)
    navigate('/homeUser')

      console.log('Authentication successful');

    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data)
    }
  };
  const handleLoginClick = () => {
    navigate('/signUp');
  };
  return (
    <div className="login-form">
      <h3>Login</h3>
      <input  type="email" className='inp' placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="password" className='inp' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <input type="button" className='btn' value="submit" onClick={handleLogin}/>
      <input type="button" className='btn' value="You have an account" onClick={handleLoginClick}/><br />
      <h4>{error}</h4>
    </div>
  );
};

export default Login;