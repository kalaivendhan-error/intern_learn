const express = require('express')
const user = require('../database/database')
const userRoute = express()
const bcrypt =require('bcrypt')

function hashingPass(password){
    return bcrypt.hash(password,10)
}

function hashCompare(password,hasedPassword){
    return bcrypt.compare(password,hasedPassword)
}

userRoute.post('/SignUp', async (req, res) => {
    console.log('success')
    const hasedPass = await hashingPass(req.body.password)
    try {
        user.insertOne({
            userName: req.body.userName,
            password: hasedPass
        })
        res.status(200).send({ success: true, message: 'signed successfully' })
    }catch(err){
        res.status(500).send({success: false, message:'Internal server error'})
        console.log(err)
    }
  
})

userRoute.post('/login', (req, res) => {
    // console.log(req.body)
    // if(req.body.userName==)
    res.status(200).send('login success')
})

module.exports = userRoute