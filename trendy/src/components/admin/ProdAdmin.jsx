import React from 'react'
import ProductDetail from './ProductDetail'

function ProdAdmin({data,fetchData}) {
  return (
    data.map((e)=>(
      <div className='prod' key={e.productid}>
        <ProductDetail e={e} fetchData={fetchData}/>
        </div>
    ))
  )
}

export default ProdAdmin