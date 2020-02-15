const express=require('express');
const app=express();
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
   res.render('index', {
     title: 'Hey',
     message: 'Hello there!',
     data:'Sample Data Set Comming Form Server Side'
    });
})
app.listen(3000,function(){
  console.log("We have started our server on port 3000");
})
