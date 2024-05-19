import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Login = () => {


    const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  
  const handleSubmit=async(event)=>{
    event.preventDefault();
try{
const response=await axios.post('http://localhost:3000/api/user/login',{email,password});
console.warn(response.data);

const token=response.data.token;
localStorage.setItem('authToken',token);

}catch(error){

  console.log(error)
}

  }
  return (
    <>
    
    
    <div className='centered-box'>
<div className="container">
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Email</label>
    <input type="text" id="name" name="name" value={email} onChange={(e) => setEmail(e.target.value)} />

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

    
    
    <button type="submit">login</button>
  </form>
</div>


</div>
   
    
    
    
    </>
  )
}

export default Login