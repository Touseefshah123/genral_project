import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import axios from 'axios'
const SignUp = () => {

  const [name, setName] = useState(''); // Corrected typo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const navigate=useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try{
   const response=await axios.post('http://localhost:3000/api/user/user-register',{name,email,password})
   
     console.log(response.data)
     const token= response.data.token;
     localStorage.setItem('authToken',token)

    }catch(error){
      console.warn(error)
    }
  }

  const navigateHome = () => {
    console.log('ok')
    navigate('/');
  }

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
            <button type="button" onClick={navigateHome}>Home</button> {/* Changed type to button */}
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;
