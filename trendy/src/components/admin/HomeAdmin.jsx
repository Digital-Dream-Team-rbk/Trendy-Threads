import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function HomeAdmin() {
  const navigate = useNavigate();
  //data of users
  const [users,setUsers]=useState([]);
  //data of products
  const[products,setProducts]=useState([])
  //fetch the data from the API
  const fetchData = () => {
    return axios.get('http://localhost:3000/api/products/all')
      .then((res) => {
        setProducts(res.data)
        console.log(products)
        return axios.get('http://localhost:3000/api/users');
      })
      .then((res) => {
        setUsers(res.data);
        console.log(users)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData()
    console.log(users)
  }, []);
  

  return (

    <h1>welcome to the home page</h1>
  )
}

export default HomeAdmin