var express= require('express');
var app= express();
var router=express.Router();
var jwt=require('jsonwebtoken');

var LoginModel = require('../models/login.js');
var registerModel = require('../models/register.js');


router.post('/login',(req,res)=>{
    let loginData=req.body;
    registerModel.findOne({username: loginData.username},(err,user)=>{
        if(err){
            console.log(err);
        }

        else if(!user){
            res.status(401).send("Invalid username");
        }

        else if(user.password !== loginData.password){
            res.status(404).send("Invalid Password");
        }

        else
        {
            let payload={subject: user._id}
            let token=jwt.sign(payload,"secretKey");
            res.status(200).send({msg: "Login Successfully"});
        }
    })

});


router.get('/get',(req,res)=>{
    res.send("Data is Get Successfully");
})

router.post('/register',(req,res)=>{
    console.log("Register Data",req.body);
    const registerData=new registerModel(
        {
            username: req.body.username,
            password: req.body.password,
            Email: req.body.Email,
            role: req.body.role,
            mobile:req.body.mobile,
            gender: req.body.gender
        }
    );
    registerData.save((err,registerdata)=>{
      if(err){
          res.send(null);
      }

      else{
          let payload={subject: registerdata._id};
          let token=jwt.sign(payload,"pooja@");
          console.log(token);
         res.status(200).send({token});
      }
    });
    
})

router.put('/update/:id',(req,res)=>{
    console.log(req.params.id);
    registerModel.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true},(err,data)=>{
    res.send(data);
    })
})

router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id);
    registerModel.findByIdAndRemove({_id: req.params.id},(err,data)=>{
    res.send(data); 
    })
})


router.get('/registred',(req,res)=>{
    registerModel.find((err,data)=>{
        if(err) {throw new Error;}

        else{
           console.log("All Data", data);
           res.send(data);
        }
    })
})

router.get('/registred/:id',(req,res)=>{
    console.log(req.params.id);
    registerModel.findById(req.params.id,(err,data)=>{
        console.log(data);
        if(err){
            throw new Error;
        }
        else{
            res.send(data);
        }
    })
      
 })

 module.exports=router;