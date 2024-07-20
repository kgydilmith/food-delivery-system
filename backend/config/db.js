import mongoose from "mongoose";

export const connectDB =async() =>{
    (await mongoose.connect('mongodb+srv://dilmithyesitha:<password>@cluster0.cw4fvfl.mongodb.net/food')).isObjectIdOrHexString(()=>console.log("DB connected"));
    

}