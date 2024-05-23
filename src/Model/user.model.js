import mongoose,{Schema} from "mongoose";

const userSchema = await Schema({
    email:{
        type:String,
        required:[true,'Email is required']
    },
    username:{
        type:String,
        required:[true,'username is required'],

    }
    ,
    password:{
        type:String,
        required:[true,'password is required']
    },
    contactNumber :{
        type:String,
        required:[true,'Contact number is required']
    },
    isVerified:{
        type:Boolean,
        default:false 
    },
    verificationToken:{
        type:String 
    }
},{
    timestamp:true
})

export const User = mongoose.models.User || mongoose.model('User',userSchema)