const jwt = require('jsonwebtoken')

const adminMiddleware = (req,res,next)=>{
    console.log("Inside adminMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.role = jwtResponse.role
            req.payload = jwtResponse.email
            if(jwtResponse.role == "admin"){
                next()
            }else{
                res.status(404).json("Authorization failed!!! Operation Denied!!!")
            }
        }catch(err){
            res.status(404).json("Authorization failed!!! Invalid Token")
        }
    }else{
        res.status(404).json("Authorization failed!!! Token Missing")
    }
}

module.exports = adminMiddleware