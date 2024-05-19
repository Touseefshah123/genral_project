import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login.jsx'
import Home from './Home.jsx';
import SignUp from './SignUp.jsx';
import UpdatePassword from './UpdatePassword.jsx';
import ResetPassword from './ResetPassword.jsx';
import ToolkitSignUp from './ToolkitSignUp.jsx';
import AddProduct from './AddProduct.jsx';
import ProductDetail from './ProductDetaiLS.jsx';
import GetProduct from './GetProduct.jsx';
import Cart from './Cart.jsx';
function App() {
  

  return (
    <>
<BrowserRouter>


<Routes>
  <Route path='/' element={<Home/>}/>
 <Route path='Login' element={<Login/>}/>
 <Route path='SignUp' element={<SignUp/>}/>
 <Route path='ResetPassword/:id' element={<ResetPassword/>}/>
 <Route path='UpdatePassword' element={<UpdatePassword/>}/>
 <Route path='ToolkitSignUp' element={<ToolkitSignUp/>}/>
 <Route path='AddProduct' element={<AddProduct/>}/>
 <Route path='ProductDetail' element={<ProductDetail/>}/>
 <Route path='GetProduct' element={<GetProduct/>}/>
 <Route path="/getproduct/Cart" element={<Cart />} />
</Routes>


</BrowserRouter>




    
     </>
  )

  }
export default App
