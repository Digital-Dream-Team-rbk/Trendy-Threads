import React, { useState,useEffect } from 'react'
import axios from 'axios'
function ProductDetail({e,fetchData}) {
const [show,setShow]=useState(false)
const [productprice,setproductprice]=useState(e.productprice)
const [productquantity,setproductquantity]=useState(e.productquantity)
const [productcategory,setproductcategory]=useState(e.productcategory)
const [tracker,setTracker]=useState(false)

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
const id=e.productid;
const handleUpdate=()=>{
  UpdateProd(id, {
    productprice: productprice,
    productquantity: productquantity,
    productcategory: productcategory,
  });
    setShow(!show)
}
//-------------------------delete request to the API----------------------------------------
const deleteProd=(id)=>{
  axios.delete(`http://localhost:3000/api/products/delete/${id}`)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{console.log(err)})
 }
 //----------------------handle delete---------------------------------------------------------
const handleDelete=()=>{
    const id=e.productid
    deleteProd(id)
}
//------------------------handle the display of inputs-------------------------------------------
const handleShow=()=>{
     setShow(!show)
}
//--------------------------handle the update of the product----------------------------------

const icrementQuanity=()=>{
  let inc=e.productquantity+1
     UpdateProd(id,{
      productquantity:inc,
    });
}
const decrementQuanity=()=>{
  let dec=e.productquantity-1
  UpdateProd(id,{
    productquantity:dec,
  });
 }
 const icrementPrice=()=>{
    let inc=e.productprice+1
    UpdateProd(id,{
      productprice:inc,
    });
    console.log(e.productprice,'ala')
 }
 const decrementPrice=()=>{
   let dec=e.productprice-1
    UpdateProd(id,{
      productprice:dec,
    });
 }
 //------------------------------use effect---------------------------------------
 useEffect(() =>{
    fetchData()
  },[tracker]);
//---------------------------------rendering the admin interface---------------------------------
  return (
    <div class="card mb-3" style={{maxWidth: '540px'}}>
 
  <div class="row g-0">
    <div class="col-md-4">
      <img src={e.productimage} class="img-fluid rounded-start" alt={e.productname} />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{e.productname}</h5>
        <p class="card-text">{e.productdescription}</p>
        <p class="card-text">Price: {e.productprice}</p>
        <button onClick={icrementPrice} class="btn btn-sm btn-outline-primary">+</button>
        <button onClick={decrementPrice} class="btn btn-sm btn-outline-primary">-</button>
        <p class="card-text">Quantity: {e.productquantity}</p>
        <button onClick={icrementQuanity} class="btn btn-sm btn-outline-primary">+</button>
        <button onClick={decrementQuanity} class="btn btn-sm btn-outline-primary">-</button>
        <p class="card-text">Category: {e.productcategory}</p>
        <button onClick={handleDelete} class="btn btn-sm btn-outline-danger">Delete</button>
        <button onClick={handleShow} class="btn btn-sm btn-outline-secondary">Update</button>
        {show ? (
          <div>
            <input type="number" class="form-control my-2" placeholder='Price' defaultValue={e.productprice} onChange={e=>setproductprice(e.target.value)} />
            <input type="number" class="form-control my-2" placeholder='Quantity' defaultValue={e.productquantity}onChange={e=>setproductquantity(e.target.value)} />
            <input type="text" class="form-control my-2" placeholder='Category' defaultValue={e.productcategory} onChange={e=>setproductcategory(e.target.value)} />
            <button class="btn btn-primary" onClick={handleUpdate}>Update</button>
          </div> )  
          : <></>}
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetail
