var mongoose=require('mongoose');

var registerSchema=mongoose.Schema(
    {
        username:{
            type:String,
            trim:true
        },

        password:{
            type:String,
            trim:true
        },

        Email:{
            type:String,
            trim:true
        },

        role:{
            type:String,
            trim:true
        },
        
        mobile:{
            type:Number,
            trim:true
        },

        gender:{
            type:String,
            trim:true
        },
    }
)

var registerModel=mongoose.model('Register',registerSchema);

module.exports=registerModel;
