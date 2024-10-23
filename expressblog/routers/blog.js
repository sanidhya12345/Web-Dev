const express = require("express");
const app = express();
const path=require("path")
const router=express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'));
})

module.exports=router
