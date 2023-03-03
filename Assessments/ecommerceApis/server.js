const express = require('express');
require('dotenv').config()

const productRoute = require('./routes/productRoutes');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/',(req,res) =>{
    res.json({message:"You are home!"})
})
app.use(productRoute)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log(`App listening on port ${port}`)})