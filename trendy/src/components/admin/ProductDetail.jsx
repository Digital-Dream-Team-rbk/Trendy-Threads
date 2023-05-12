import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function ProductDetail({e,fetchData}) {
const [show,setShow]=useState(false)
const [productprice,setproductprice]=useState(0)
const [productquantity,setproductquantity]=useState(0)
const [productcategory,setproductcategory]=useState("")
const [tracker,setTracker]=useState(false)
const navigate = useNavigate();

//-------------------------update request to the API-------------------------------
const UpdateProd=(id,prod)=>{
 axios.put(`http://localhost:3000/api/products/update/${id}`,prod)
 .then((res)=>{
    console.log(res.data)
    setTracker(!tracker)
  })
  .catch((err)=>{console.log(err)})
}
//---------------------------handle the update------------------------------------
const handleUpdate=()=>{
    const id=e.productid;
    const prod={
        productname:e.productname,
        adminid:e.adminid,
        productprice:productprice,
        productquantity:productquantity,
        productcategory:productcategory,
        productimage:e.productimage,
    }
    UpdateProd(id,prod)
    setShow(!show)

}
//-------------------------delete request to the API------------------------------------
const deleteProd=(id)=>{
  axios.delete(`http://localhost:3000/api/products/delete/${id}`)
  .then((res)=>{
    console.log(res.data)
    setTracker(!tracker)
  })
  .catch((err)=>{console.log(err)})
 }
 //----------------------handle delete-------------------------------------------------------
const handleDelete=()=>{
    const id=e.productid
    deleteProd(id)
}
//------------------------handle the display of inputs-------------------------------------------
const handleShow=()=>{
     setShow(!show)
}
//--------------------------handle the update of the product
const icrementQuanity=()=>{
     e.productquantity++
}
const decrementQuanity=()=>{
  e.productquantity--
 }
 const icrementPrice=()=>{
    console.log(e.productprice,'b')
    e.productprice++
    console.log(e.productprice,'a')
 }
 const decrementPrice=()=>{
   e.productprice--
 }
 //----------------------------adding a product------------------------------------
 const handleAdd=()=>{
    navigate("/prod")
 }
 //------------------------------use effect---------------------------------------
 useEffect(() => {
    fetchData()
  },[tracker]);

//---------------------------------rendering the admin interface---------------------------------
  return (
    <div>  
     <div>
       <button className='btn' onClick={handleAdd}>Add new Product</button>
   </div>
    <div>
  <h4>{e.productname}</h4>
    <h4>{e.productprice}</h4>
    <button onClick={icrementPrice}>+</button>
    <button onClick={decrementPrice}>-</button>
    <h4>{e.productquantity}</h4>
    <button onClick={icrementQuanity}>+</button>
    <button onClick={decrementQuanity}>-</button>
    <h4>{e.productcategory}</h4>
    <button className='btn'onClick={handleDelete}>Delete</button>
    <button className='btn' onClick={handleShow}>Update</button>
        {show ? (
          <div>
            <input type="number" className='inp' placeholder='productprice'onChange={e=>setproductprice(e.target.value)}/><br />
            <input type="number" className='inp' placeholder='productquantity'onChange={e=>setproductquantity(e.target.value)}/><br />
            <input type="text" className='inp' placeholder='productcategory'onChange={e=>setproductcategory(e.target.value)}/><br />
            <button className='btn' onClick={handleUpdate}>Confirm</button>
          </div> )  
          : <></>}
         </div>

    </div>
   
  )
}

export default ProductDetail