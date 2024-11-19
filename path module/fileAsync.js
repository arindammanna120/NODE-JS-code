// import the module
const fs=require('fs');
// import path module
const path=require('path');
// writing the data
// fs.writeFile("test.txt","New Employee data:- Name:Arindam, age:25,Position:devloper",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data inserted successfully");
//     }
// })
const filepath=path.join('src','Home','test.txt');
console.log(filepath);
const filepathResolve=path.resolve('src','Home','test.txt');
console.log(filepathResolve);
// knowing the extension
console.log(path.extname(filepathResolve));

// reading the data
fs.readFile(filepath,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})