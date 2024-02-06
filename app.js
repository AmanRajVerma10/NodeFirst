const express = require("express");
const bodyParser= require("body-parser");

const app = express();

const adminRoutes= require('./routes/admin')
const shopRoutes= require('./routes/shop')
const userRoutes= require('./routes/user')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000);
