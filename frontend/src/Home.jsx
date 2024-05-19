import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import UpdatePassword from "./UpdatePassword";
import ToolkitSignUp from "./ToolkitSignUp";
import ProductDetail from "./ProductDetaiLS.jsx";
import AddProduct from "./AddProduct.jsx";
import GetProduct from "./GetProduct.jsx";
import Cart from "./Cart.jsx";
const Home = () => {
    const name='asad';
  return (
    <nav>
  <ul>
    <li><Link to='/Login'>Login</Link></li>
    <li><Link to='/SignUp'>signUp</Link></li>
    <li><Link to='/ResetPassword/1234'>resetPassword</Link></li>  
    <li><Link to='/UpdatePassword'>UpdatePassword</Link></li>
    <li><Link to='/'>UpdatePassword</Link></li>
    <li><Link to='/ToolkitSignUp'>ToolkitSignUp</Link></li>  
    <li><Link to='/addproduct'>Add Products</Link></li> 
      
    <li><Link to='/productdetail'>Products Detail</Link></li> 
    <li><Link to='/getproduct'>get Detail</Link></li> 
    <li><Link to='/Cart'> cART Detail</Link></li>
  </ul>
</nav>
  )
}

export default Home