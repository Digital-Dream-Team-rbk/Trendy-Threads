import React, { useState } from 'react'
import axios from 'axios'
function ProductDetail({e}) {
const [show,setShow]=useState(false)
const [productprice,setproductprice]=useState(0)
const [productquantity,setproductquantity]=useState(0)
const [productcategory,setproductcategory]=useState("")

//update request to the API
const UpdateProd=(id,prod)=>{
 axios.put(`http://localhost:3000/api/products/update/${id}`,prod)
}
//handle the display of inputs
const handleShow=()=>{
     setShow(!show)
}
//handle the update of the product
const icrementQuanity=()=>{
   return  e.productquantity++
}
const decrementQuanity=()=>{
    return  e.productquantity--
 }
 const icrementPrice=()=>{
    return  e.productprice++
 }
 const decrementPrice=()=>{
    return  e.productprice--
 }


  return (
    <div>  
    <h4>{e.productname}</h4>
    <h4>{e.productprice}</h4>
    <button onClick={icrementPrice}>+</button>
    <button onClick={decrementPrice}>-</button>
    <h4>{e.productquantity}</h4>
    <button onClick={icrementQuanity}>+</button>
    <button onClick={decrementQuanity}>-</button>
    <h4>{e.productcategory}</h4>
    <button className='btn'>Delete</button>
    <button className='btn' onClick={handleShow}>Update</button>
        {show ? (
          <div>
            <input type="number" className='inp' placeholder='productprice'onChange={e=>setproductprice(e.target.value)}/><br />
            <input type="number" className='inp' placeholder='productquantity'onChange={e=>setproductquantity(e.target.value)}/><br />
            <input type="text" className='inp' placeholder='productcategory'onChange={e=>setproductcategory(e.target.value)}/><br />
            <button className='btn' onClick={handleUpdate}> submit</button>
          </div> )  
          : <></>}
    </div>
   
  )
}

export default ProductDetail