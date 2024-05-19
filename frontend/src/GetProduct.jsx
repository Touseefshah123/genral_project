import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addToCart, removeFromCart } from './features/counter/userSlice';
import Cart from './Cart.jsx';
import { useNavigate } from 'react-router-dom';

const GetProduct = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state.user.product);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getProducts());
        setProduct(response.payload);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleCart = async (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {product.map((productItem, index) => (
        <div key={index}>
          <h2>{productItem.product_name}</h2>
          <img src={productItem.image_path ? `http://localhost:3000/${productItem.image_path}` : '/default-image.jpg'} style={{ width: "100px" }} alt="Product" />
          <button onClick={() => handleCart(productItem)}>Add to Cart</button>
          <button onClick={() => navigate('./Cart')}>View Cart</button>
        </div>
      ))}
      
      {product.map((productItem, index) => (
        <div key={index}>
          <video controls style={{ maxWidth: '100%' }}>
            <source src={`http://localhost:3000/${productItem.video_path}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={() => handleCart(productItem)}>Add to Cart</button>
          <button onClick={() => navigate('./Cart.jsx')}>View Cart</button>
        </div>
      ))}
    </>
  );
}

export default GetProduct;
