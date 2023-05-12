import React from 'react'
import ProductDetail from './ProductDetail'

function ProdAdmin({data}) {
  return (
    data.map((e)=>(
      <div className='prod' key={e.productid}>
        <ProductDetail e={e}/>
        </div>
    ))
  )
}

export default ProdAdmin