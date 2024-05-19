import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductDetail = () => {
  const [product,setProduct]=useState([]);

useEffect((e)=>{

const data=async()=>{

const response=await axios.get('http://localhost:3000/api/user/product');
setProduct(response.data);
console.log(response.data)

}

data();

},[])


  return (
    <>
    
    

{product.map((product, index) => (
  <div key={index}>
    {console.log(product.image_path)}
    <h2>{product.product_name}</h2>
    
      <img src={product.image_path ?   `http://localhost:3000/${product.image_path}` : '/default-image.jpg'} style={{width:"100px"}}/>
    
  </div>
  
))}
 
  {


product.map((product,index)=>(

<div key={index}>


<video controls style={{ maxWidth: '100%' }}>
              <source src={`http://localhost:3000/${product.video_path}`} type="video/mp4" />
              Your browser does not support the video tag.
              {console.log(product.video_path)}
            </video>

</div>

))
  }
             
    
    
    
    
    </>
  )
}

export default ProductDetail