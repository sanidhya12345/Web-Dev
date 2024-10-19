const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('this is the initial page');
})

app.get('/about',(req,res)=>{
    res.send('this is about page');
})

app.listen(port,()=>{
    console.log(`Example app is listening at ${port}`);
})