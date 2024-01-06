import mongoose from "mongoose";
const categorySchemanew =  mongoose.Schema({
 name:{
    type:String,
    required:true,
 }
},{timesstamps:true})
export const Category = mongoose.model("Category", categorySchemanew);