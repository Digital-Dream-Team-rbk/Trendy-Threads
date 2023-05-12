import React from 'react'

function ProdAdmin({data}) {
  return (
    data.map((e)=>(
      <div className='prod' key={e.productid}>
        <img className='img' src={e.productimage} alt="" />
        <h4>{e.productname}</h4>
        <h4>{e.productprice}</h4>
        <h4>{e.productquantity}</h4>
        <h4>{e.productcategory}</h4>
        <button className='btn' placeholder='Buy' >Buy</button>
        </div>
    ))
  )
}

export default ProdAdmin