import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';

function Prod() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [productname,setproductname]=useState("")
  const [productprice,setproductprice]=useState(0)
  const [productquantity,setproductquantity]=useState(0)
  const [productcategory,setproductcategory]=useState("")

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadButtonClick = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(res.data.url);
    } catch (err) {
      console.log(err);
    }
  }
  const Submit=()=>{
    axios.post("http://localhost:3000/api/products/postone",{
        productname:productname,
        productprice:productprice,
        productquantity:productquantity,
        productcategory:productcategory

     
    })
    .then(suc=>{console.log(suc)})
    .catch(err=>console.log(err))
      }

  return (
    <div className='prod'>

<input type="text" className='inp' placeholder='productname'onChange={e=>setproductname(e.target.value)}/><br />
<input type="number" className='inp' placeholder='productprice'onChange={e=>setproductprice(e.target.value)}/><br />
<input type="number" className='inp' placeholder='productquantity'onChange={e=>setproductquantity(e.target.value)}/><br />
<input type="text" className='inp' placeholder='productcategory'onChange={e=>setproductcategory(e.target.value)}/><br />
     
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadButtonClick}>Upload</button>
      {imageUrl && (
        <Image
          cloudName="vrzz6dtg"
          publicId={imageUrl}
          width="300"
          crop="scale"
        />
      )}
<button className='btn' onClick={Submit}> submit</button>
    </div>
  );
}

export default Prod;