const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync('index1.html').toString();// whatevet data I'm getting convert into string
    res.end(data);

});
server.listen(3100);
console.log('server is listening 3100');