require('./db');
var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var bodyParser=require('body-parser');
var UesrRoutes=require('./routes/user.js');

var multer=require('multer');

var cores=require('cors');
//app.use(BodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
// parse the raw data
//app.use(bodyParser.raw());
// parse text
//app.use(bodyParser.text());
//app.use(multer());


app.use(cores());

app.use(UesrRoutes);

app.listen(PORT,()=>{
    console.log('Server Started Port at 3000');
});
