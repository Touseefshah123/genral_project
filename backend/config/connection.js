import mongoose from "mongoose";
const Db_connection=async(URL)=>{
    const password="touseefxyz123";
const uri=`     `;

try{
await mongoose.connect(URL)
console.log("Db_connection successfull");


}catch(err){


    console.warn(err);
}



}
export default Db_connection;