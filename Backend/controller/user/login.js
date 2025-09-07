import bcrypt from 'bcryptjs';
import User from "../../model/usermodel.js";
import connect from '../../config/mongodbconfig.js';
import jwt from 'jsonwebtoken';

connect(); // Ensure database connection

export const login = async (req, res) => {
    try{
        const { email,password } = req.body; // destructring requested body
        //validation: check if email and password are provided
        if(!email || !password){
            return res.status(400).json({error: "Email and password are required"});
        }
        //find user by email
        const user = await User.findOne({email});  
        
        //is user is found thenb
        if(!user){
            return res.status(400).json({error: "user dont exist"});
        }

        //check if password is valid
        const validPassword = await bcrypt.compare(password, user.password);

        //if password is valid
        if(!validPassword){
            return res.status(400).json({error: "Invalid password"});
        }

        //generate JWT token
        const tokenData={
            username:user.username,
            email:user.email,
        };

        //sing the token with the secret key and set expiration time
        const token = jwt.sign(tokenData, 'your_jwt_secret_key', {expiresIn:'1h'});

        //Set token in cookie 
        res.cookie("token", token,{
            httpOnly:false
        });

        //Respond with success message 
        return res.status(200).json({
            message:"Login successful",
            Success:true,
    });
} catch (error) {
   //handle errors
   console.error("Login error:", error);
   return res.status(500).json({error:"Internal Server Error"});
}
};