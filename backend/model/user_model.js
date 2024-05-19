import mongoose from "mongoose";



const schema=mongoose.Schema({
name:{type:String},
email:{type:String,unique:true},
password:{type:String},



})
const user_model=mongoose.model('users',schema);
export default user_model