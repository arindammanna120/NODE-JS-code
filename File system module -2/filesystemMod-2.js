const fs=require('fs');
// creating a file
try{
 fs.writeFileSync('employee.txt','name:Arindam,age: 25,Position:Devloper');
}catch(err){
  console.log(err);
}
// append the data of new employee
fs.appendFileSync('employee.txt','Name:smiriti,age:23,position:devloper');

// delete the files
try{
fs.unlinkSync(employee.txt);
}catch(err){
    console.log("not valid")
}
console.log("this is another task is being performed");