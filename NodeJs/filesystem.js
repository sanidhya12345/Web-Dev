//? File system module is used to work with the file system of our computer system.

var fs=require('fs');

// Read files using file system module .

fs.readFile("./read.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})