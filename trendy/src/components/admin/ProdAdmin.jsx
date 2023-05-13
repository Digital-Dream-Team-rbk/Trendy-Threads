import React from 'react'
import ProductDetail from '../admin/ProductDetail'
import { useNavigate } from 'react-router-dom';
function ProdAdmin({data,fetchData}) {
  const navigate = useNavigate();
  const handleAdd=()=>{
    navigate("/prod")
 }
  return (
    <div>
        <button class="btn btn-primary" onClick={handleAdd}>Add new Product</button>
         {data.map((e)=>(
        <div className='prod' key={e.productid}>
        <ProductDetail e={e} fetchData={fetchData}/>
        </div>
    ))}
    </div>
 
  )
}

export default ProdAdmin