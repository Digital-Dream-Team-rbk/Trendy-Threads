import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HomeUser = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products/all');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const update =(event,id,quantity)=>{
    event.preventDefault();
    const updated=Number(quantity)-1
   axios.put(`http://localhost:3000/api/products/update/${id}`,{
    productquantity:updated
   })
   .then(suc=>{console.log(suc.data)
    fetch()})
    .catch(error => console.log(error))
}
  useEffect(() => {
    fetch();
  }, []);

  console.log(data);

  return (
    <div>
        {data.map((e)=>
        <div className='prod' key={e.productid}>
        <img className='img' src={e.productimage}alt="" />
        <h4>{e.productname}</h4>
        <h4>{e.productprice}</h4>
        <h4>{e.productquantity}</h4>
        <h4>{e.productcategory}</h4>
        <button className='btn' placeholder='Buy' onClick={(event)=>update(event,e.productid,e.productquantity)}>Buy</button>
        
        </div>
     )}</div>
  );
};

export default HomeUser;