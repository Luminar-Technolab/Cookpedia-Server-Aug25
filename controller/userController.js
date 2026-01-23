const users = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
exports.registerController = async (req,res)=>{
    console.log("Iniside registerController");
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(409).json("User already Exists... Please Login!!!")
        }else{
            let encryptedPassword = await bcrypt.hash(password,10)
            const newUser = await users.create({
                username,email,password:encryptedPassword
            })
            res.status(200).json(newUser)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}

//login
exports.loginController = async (req,res)=>{
    console.log("Iniside loginController");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            const isPasswordMatch = await bcrypt.compare(password,existingUser.password)
            if(isPasswordMatch){
                const token = jwt.sign({email,role:existingUser.role},process.env.JWT_SECRET_KEY)
                res.status(200).json({user:existingUser,token})
            }else{
                res.status(409).json("Incorrect Email / Password!!!")
            }
        }else{
            res.status(409).json("Invalid Email... Please Register to access to Cookpedia!!!")
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}