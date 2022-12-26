const express=require('express');
const bodyParser=require("body-parser");
const user=require("./models/user");
const mongoose = require('mongoose');
const app=express();
const port=80;
mongoose.connect("mongodb://localhost:27017/user",{useNewUrlParser:true})
app.set('view engine','pug')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('form')
})
app.get('/registration',function(req,res){
    res.render('registration')
})
app.post('/registration',function(req,res){
    //console.log(req.body)
    const newUser=new user();
    newUser.firstname=req.body.firstname;
    newUser.middlename=req.body.middlename;
    newUser.lastname=req.body.lastname;
    newUser.email=req.body.email;
    newUser.contact=req.body.contact;
    newUser.address=req.body.address;
    newUser.city=req.body.city;
    newUser.state=req.body.state;
    newUser.pincode=req.body.pincode;

    newUser.save(function(err,result){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(result);
        }
    })

})

app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)})