require('dotenv').config()
require('./config/db')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const cookpediaServer = express()

cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(routes)

const PORT = 3000

cookpediaServer.listen(PORT,()=>{
    console.log("Cookpedia Server started... Waiting for Client request!!!");    
})

cookpediaServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Cookpedia Server started... Waiting for Client request!!!</h1>")
})