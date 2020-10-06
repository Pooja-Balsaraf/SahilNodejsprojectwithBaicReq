var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/sahilProject',{ useNewUrlParser: true ,useUnifiedTopology: true} ,(err,data)=>{
    if(err) throw new Error;

    console.log("DataBase Connected Successfully");
})

