const express = require('express');
const path = require('path');
const router = express.Router();
const {upload} = require('../multer');  
const ErrorHandler = require('../utils/ErrorHandler');

router.post('/create-user',upload.single("file"),(req,res)=>{
    const {name,email,password } = req.body;
    const userEmail = await use.findOne({email})
    if(userEmail){
        return next(new ErrorHandler('user already exists',400));
b     }
})