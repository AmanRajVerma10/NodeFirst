const express= require('express');
const path=require('path');
const rootDir= require('../util/path')

const router= express.Router();

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))

})

router.post('/success',(req,res,next)=>{
    res.send('<h1>Form Successfully Filled</h1>')
})

module.exports=router;