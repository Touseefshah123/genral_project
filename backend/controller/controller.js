import user_model from "../model/user_model.js";
import bcrypt from 'bcrypt';
import  sign  from "jsonwebtoken";
import Jwt  from "jsonwebtoken";
import verifToken from "../middleWare/resetPassword.js";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import productModel from "../model/product.js";
import { model } from "mongoose";
dotenv.config(); // Load environment variables from .env file

const secret_key = process.env.SACRET_KEY || '12345678';

console.log(secret_key,"ok");
const signUp_user = async (req, res) => {
    const {name, email, password } = req.body;
    
    try {
      const existUser=await user_model.findOne({email:email});
      if(existUser){
        res.send({ "Message": 'Email already exists' });

      }
       else {
        if(name && email && password) {
            const hashed_password = await bcrypt.hash(password, 10);

            const model = new user_model({
                name: name,
                email: email,
                password: hashed_password
            });

            await model.save();
           
            const user = await user_model.findOne({ email });
            const token=Jwt.sign({user_id:user._id},secret_key,{expiresIn:"2h"})
            res.send({ "Message": 'User registered successfully',token});
        } else {
            res.status(400).send({ "Message": 'Name, email, or password is missing' });
        }
    } }catch (error) {
        console.error(error);
        res.status(500).send({ "Message": 'Error occurred while signing up' });
    }
}
const login_user=async(req,res)=>{
const{ email,password}=req.body;
if(email && password){
    const user=await user_model.findOne({email});
    if(user){
    const matched_password=await bcrypt.compare(password,user.password);
    if(matched_password){
  const token= Jwt.sign({userId:user._id,user_email:user.email,user_name:user.name},secret_key,{expiresIn:"1d"})
 res.send({user_name:user.name,user_email:user.email,token})

    }else{
        res.send({"Message":"password or email missing"})


    }


    }else{
res.send({"Message":"email does not exist"})


    }


}else{

    res.send({"Message":"email or password missing"})
}



}
const reset_password=async(req,res)=>{
const{userId}=req;
const{newPassword}=req.body;
const hashed_password=await bcrypt.hash(newPassword,10);
const user=await user_model.findByIdAndUpdate(userId,{password:hashed_password})
sendEmail(userId,"password changed")
res.send({Message:"password changed successfully"})

}

const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Outlook'
  auth: {
    user: 'touseefibms@gmail.com',
    pass: 'touseefxyz123'
  }
});

const sendEmail = (userId, message) => {
  const mailOptions = {
    from: 'touseefibms@gmail.com',
    to: userId,
    subject: 'Password Changed',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};


const product_register = async (req, res) => {
    const { product_name } = req.body;
    try {
    const video=req.files['product_video'][0];
    const image=req.files['product_image'][0];
    const productData=new productModel({
    product_name:product_name,
    product_image:image.filename,
    image_path:image.path,
    product_video:video.filename,
    video_path:video.path

    })
await productData.save();


      return res.json({ "Message": "Product saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "Message": "Error occurred while saving product" });
    }
};

const showFiles=async(req,res)=>{
const data=await productModel.find();
console.warn(data);
try{
if(data){
res.send(data)

}else{

  res.send({"Message":"not found"})
}


}catch(err){
  console.warn(err)
}

}

export {signUp_user,login_user,reset_password,product_register,showFiles};
