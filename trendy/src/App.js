import React from 'react';
import './App.css';
import Signup from './components/user/Signup.jsx';
import Login from './components/user/Login.jsx';
import AdminLogin from './components/admin/AdminLogin';
import AdminSignup from './components/admin/AdminSignUp';
import HomeAdmin from './components/admin/HomeAdmin'
import { Routes, Route} from "react-router-dom";
import HomeUser from './components/user/HomeUser.jsx';
import Prod from './components/Prod';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/homeUser" element={<HomeUser/>}/>
      <Route path="/prod" element={<Prod/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUpAdmin" element={<AdminSignup/>}/>
      <Route path="/loginAdmin" element={<AdminLogin/>}/>
      <Route path="/homeAdmin" element={<HomeAdmin/>}/>
    </Routes>    
  );
}

export default App;
