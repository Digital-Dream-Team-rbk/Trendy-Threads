import React from 'react'
import ProductDetail from '../admin/ProductDetail'
import { useNavigate } from 'react-router-dom';
function ProdAdmin({data,fetchData}) {
  const navigate = useNavigate();
  const handleAdd=()=>{
    navigate("/prod")
 }
  return (       
    <div  className='container' >

    <button className="btn"   onClick={handleAdd} >Add new Product</button>

    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width:700,
  height:800}} >
         {data.map((e,i)=>(
        <div className='prod' key={e.productid}  >
        <ProductDetail e={e} fetchData={fetchData} key={i}/>
        </div>

    ))}
    </div>
    </div>
 
  )
}

export default ProdAdmin