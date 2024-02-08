const express= require('express');

const contactController=require('../controllers/contact');

const router= express.Router();

router.get('/contact',contactController.contactForm)

router.post('/success',contactController.successPage)

module.exports=router;