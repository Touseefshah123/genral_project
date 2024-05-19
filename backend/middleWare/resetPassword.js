import  Express  from "express";
import Jwt  from "jsonwebtoken";
const secret_key=process.env.SACRET_KEY;
const  verifToken=async(req,res,next)=> {

const token=req.headers.authorization;

if(!token){

    res.send({"Message":"unAtharized"});
}else{
Jwt.sign(token,secret_key,(err,decode)=>{
if(err){

    res.send(err)
}else{


    req.userId=decode.userId;
    next();
}



});



}
    
}
export default verifToken;