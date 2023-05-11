import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UsersAdmin from './UsersAdmin';
import ProdAdmin from './ProdAdmin';
function HomeAdmin() {
  //data of users
  const [users,setUsers]=useState([]);
  //data of products
  const[products,setProducts]=useState([])
  //fetch the data from the API
  const fetchData= async()=>{
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
//use effect
  useEffect(() => {
    fetchData()
  },[]);
  
  return (
    <div>
      <UsersAdmin data={users}/>
      <ProdAdmin data={products}/>
    </div>
  )
}

export default HomeAdmin