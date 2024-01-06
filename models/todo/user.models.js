import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true, "password is reuired"],
        unique:true,
        lowercase:true,
        maxLength:[10, "maximum ten character"],
        minLength:[6, "minimun six charcter"]


  }
}, {timesstamp: true})

export const User = mongoose.model("User", userSchema);