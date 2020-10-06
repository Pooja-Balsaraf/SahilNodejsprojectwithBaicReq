var mongoose=require('mongoose');

var LoginSchema=mongoose.Schema({
    username:{
        type:String,
        trim:true,
       
    },
    password:{
        type:String,
        trim:true,   
    }
})

var loginModel=mongoose.model('login', LoginSchema);
module.exports=loginModel;