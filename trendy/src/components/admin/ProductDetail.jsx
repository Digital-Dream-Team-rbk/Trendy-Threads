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
    setTracker(!tracker)
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
    // console.log(e.productprice,'ala')
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
    <div className="card mb-3"  >
 
  <div className="row g-0" >
    <div className="col-md-4" >
      <img src={e.productimage} className="img-fluid rounded-start" alt={e.productname} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{e.productname}</h5>
        <p className="card-text">{e.productdescription}</p>
        <p className="card-text">Price: {e.productprice}</p>
        <button onClick={icrementPrice} className="btn ">+</button>
        <button onClick={decrementPrice} className="btn btn-sm btn-outline-primary">-</button>
        <p className="card-text">Quantity: {e.productquantity}</p>
        <button onClick={icrementQuanity} className="btn ">+</button>
        <button onClick={decrementQuanity} className="btn btn-sm btn-outline-primary">-</button>
        <p className="card-text">Category: {e.productcategory}</p>
        <button onClick={handleDelete} className="btn ">Delete</button>
        <button onClick={handleShow} className="btn ">Update</button>
        {show ? (
          <div>
            <input   style={{ width: '150px', marginRight: '10px' }}
            type="number" className="inp" placeholder='Price' defaultValue={e.productprice} onChange={e=>setproductprice(e.target.value)} />
            <input   style={{ width: '150px', marginRight: '10px' }}
             type="number" className="form-control my-2" placeholder='Quantity' defaultValue={e.productquantity}onChange={e=>setproductquantity(e.target.value)} />
            <input  style={{ width: '150px', marginRight: '10px' }} 
            type="text" className="form-control my-2" placeholder='Category' defaultValue={e.productcategory} onChange={e=>setproductcategory(e.target.value)} />
            <button className="btn " onClick={handleUpdate}>Update</button>
          </div> )  
          : <></>}
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetail
