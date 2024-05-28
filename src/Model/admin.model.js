
import mongoose,{ Schema } from "mongoose";

const adminSchema = new Schema({
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    contact:{
        type:Number,
        required:true 
    },
    username:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Admin = mongoose.models.Admin || mongoose.model('Admin',adminSchema)