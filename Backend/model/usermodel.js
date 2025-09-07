import mongoose from "mongoose";    
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"]
    },
    email:{
        type:String,
        required:[true,"please provide email address"],
        unique: true 
    },
    password:{
        type:String,
        required:[true,"please provide password"]
    },
    mobilenumber:{
        type:Number,
        required:[true,"please provide phone number"]
    }

    
})
const user = mongoose.model("User", userSchema);
export default user;