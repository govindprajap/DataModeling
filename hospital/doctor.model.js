import mongoose from "mongoose";
const doctordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experinceInyears:{
        type:Number,
        required:true,
        default:0
    },
    workInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"

        }
    ]
},{timestamps:true})
export const Doctor = mongoose.model("Doctor", doctordSchema)