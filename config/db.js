const mongoose = require('mongoose')

const connectionString = process.env.DB_URL

mongoose.connect(connectionString).then(res=>{
    console.log("Database Connection Successfull!!!");
}).catch(error=>{
    console.log("Database connection failed...");
    console.log(error);    
})