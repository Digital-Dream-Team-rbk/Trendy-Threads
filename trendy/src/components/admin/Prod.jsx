import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Prod() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [productname,setproductname]=useState("")
  const [productprice,setproductprice]=useState(0)
  const [productquantity,setproductquantity]=useState(0)
  const [productcategory,setproductcategory]=useState("")

  
  const Submit=()=>{
    axios.post("http://localhost:3000/api/products/postone",{
        productname:productname,
        productprice:productprice,
        productquantity:productquantity,
        productcategory:productcategory,
        productimage:imageUrl
    })
    .then(suc=>{
      console.log(suc)
      navigate("/homeAdmin")})
    .catch(err=>console.log(err))
      }

  return (
    <div className='prod'>

<input type="text" className='inp' placeholder='productname'onChange={e=>setproductname(e.target.value)}/><br />
<input type="number" className='inp' placeholder='productprice'onChange={e=>setproductprice(e.target.value)}/><br />
<input type="number" className='inp' placeholder='productquantity'onChange={e=>setproductquantity(e.target.value)}/><br />
<input type="text" className='inp' placeholder='productcategory'onChange={e=>setproductcategory(e.target.value)}/><br />
<input type="text" className='inp' placeholder='productimage'onChange={e=>setImageUrl(e.target.value)}/><br />    
<button className='btn' onClick={Submit}> submit</button>
    </div>
  );
}

export default Prod;