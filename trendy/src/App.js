import React from 'react';
import './App.css';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignUp';
import HomeAdmin from './components/HomeAdmin'
import { Routes, Route} from "react-router-dom";
import HomeUser from './components/HomeUser';

function App() {
  return (
    <Routes>
      <Route path="/homeUser" element={<HomeUser/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUpAdmin" element={<AdminSignup/>}/>
      <Route path="/loginAdmin" element={<AdminLogin/>}/>
      <Route path="/homeAdmin" element={<HomeAdmin/>}/>
    </Routes>    
  );
}

export default App;
