import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signUpUser } from './features/counter/userSlice';


const ToolkitSignUp = () => {
    const [name, setName] = useState(''); // Corrected typo
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const dispatch=useDispatch();
    // Access status from Redux state
    const token=useSelector(state=>state.user.userData);

  
    const handleSubmit = async(event) => {
      event.preventDefault();
      
      try{
      const data=  dispatch(signUpUser({name,email,password}));
     
       console.warn(token)
      } catch(err){
        console.warn(err)
      }}
    return (
      <>
        <div className='centered-box'>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="address">Email</label>
              <input type="text" id="address" name="address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
  
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
              
              <button type="submit">Submit</button><br></br>
             
             
            </form>
            {
              


            }
        
          </div>
        </div>





    </>
  )
}

export default ToolkitSignUp