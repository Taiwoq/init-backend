const User = require("../models/userModel")

const registerUser = async (request,response) =>{
    const {fullName,email,phone,password} = request.body
    const userExists = await User.findOne({email});
    if(userExists) {
        response.status(400).json({
            error:"user already exists" })     
    }

    const newUser = await User.create({fullName,email,phone,password})   
    if(newUser){
        response.status(201).json({
            message:"user created successfully"})
    } else{
        response.status(500).json({
            error:"invalid data error"
        })
    }

}
module.exports = {registerUser}