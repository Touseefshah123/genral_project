import React from 'react'
import { useContext } from 'react'
import { NameContext,FatherContext } from './ResetPassword';

const ContextApi = () => {
    const {name}=useContext(NameContext);

    const {fatherName}=useContext(FatherContext);
  return (
    <>
    <h1>{name}</h1>
    <h2>{fatherName}</h2>
    
    
    
    
    </>
  )
}

export default ContextApi