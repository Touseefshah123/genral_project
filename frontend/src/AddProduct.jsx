import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [names, setName] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  console.log(names);
 
  
 
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (names && image && video) {
        const formData = new FormData();
        formData.append('product_name', names); // Include the 'name' field
        formData.append('product_image', image);
        formData.append('product_video', video);

        const response = await axios.post('http://localhost:3000/api/user/productRegister', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data)
      } else {
        toast.error("Name, image, or video is missing");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containers">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="productName">Name:</label>
        <input type="text" id="productName"   onChange={(e)=>setName(e.target.value)} />

        <label htmlFor="productImage">Image:</label>
        <input type="file" accept="image/*" id="productImage" onChange={handleImage} />

        <label htmlFor="productVideo">Video:</label>
        <input type="file" accept="video/*" id="productVideo" onChange={handleVideo} />

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
