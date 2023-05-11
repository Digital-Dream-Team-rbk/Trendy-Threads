import React from 'react'
import { useNavigate } from 'react-router-dom';
function WelcomePage() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Welcome to our site</h1>
        <button className='btn' onClick={(e)=>(navigate("/loginAdmin"))}>Login as an Admin</button>
        <button className='btn' onClick={(e)=>(navigate("/login"))}>Login as a User</button>
    </div>
  )
}

export default WelcomePage