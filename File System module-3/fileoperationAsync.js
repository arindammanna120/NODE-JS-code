// import module
const fs=require('fs');

// reading the data using Async
// fs.readFile("test.txt",(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data.toString());

//   }
// })

// write the data

fs.writeFile("test2.txt",'new employee',(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("Written data");
    }

    
})

fs.appendFile("test2.txt",'\n Another employee',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Append succusfully");
    }
})

fs.unlink('test2.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("succussfully deleted");
    }
})
console.log("this is another operation");
