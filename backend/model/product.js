import mongoose, { Schema } from "mongoose";
const schema=new Schema({
product_name:{type:String },
product_image:{type:String},
image_path:{type:String},
product_video:{type:String},
video_path:{type:String}


})
const productModel=mongoose.model('products',schema);
export default productModel;