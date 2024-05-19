import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContextApi from './ContextApi';
const NameContext = createContext();
const FatherContext = createContext();

const ResetPassword = () => {
 const [address,setAddress]=useState();
  const name = 'ali';
  const fatherName = 'saad';
  const { id } = useParams();
  const useData=()=>{

  }
  return (
    
    <NameContext.Provider value={{ name }}>
      <FatherContext.Provider value={{ fatherName }}>
        <ContextApi/>
      </FatherContext.Provider>
    </NameContext.Provider>
  );
  
};

export {NameContext,FatherContext};
export default ResetPassword;

