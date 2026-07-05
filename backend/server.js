const express = require('express')
const server =express()
const userRoute =require('./routers/userRouter.js')
const cors = require('cors')
const path = require('path')
const mongoose =require('mongoose')
require('./database/database_connect.js')
const user =require('./database/database.js')

server.use(cors('*'))
server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use('/user',userRoute)


server.use('',(req,res)=>{
    res.status(404).send('404 error!!! Page not found')
})


server.listen(2000,()=>{console.log('server running in port 2000')})