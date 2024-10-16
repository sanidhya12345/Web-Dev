//? File system module is used to work with the file system of our computer system.

var fs=require('fs');

// Read files using file system module .

// fs.readFile("./read.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//append data into the file

// fs.appendFile("./demo.txt","Sanidhya Varshney",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("data appended successfully");
// })

// open file using file system module.

// fs.open("./demo.txt",'r',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file opened successfully in read mode");
// })


//write file method.

fs.writeFile("newfile.txt","This file is generated using writefile method.",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("File write successfully")
})