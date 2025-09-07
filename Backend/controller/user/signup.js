import express from 'express';
import bcrypt from 'bcryptjs';
import User from "../../model/usermodel.js";
const registerNewUser = async (req, res) => {
    try{
        console.log(req.body)
        const { username, email, password, mobilenumber} = req.body; // destructring requested body
        //validation: check if username , email, and password are provided
        if(!username || !email || !password || !mobilenumber){
            return res.status(400).json({error: "Username, email, password and mobile number are required"});
        }

        //check if user already exited
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({error: "user already exist"});
        }

        //Hash the password 
    const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create a new user object 
        const newuser = new User({
            username,
            email,
            password: hashedPassword,
            mobilenumber
        });

        // save the  new user to the database 
        const savedUser = await newuser.save();

        //Respond with success message
        return res.status(200).json({
        success:true,
        message:"user registered successfully",
        savedUser
        });

    }
     
    catch (error) {
        console.error(error); //log the error for debugging
        return res.status(500).json({error: "Internal Server Error"}); //send a geneeric error message
    }
};

export default registerNewUser;