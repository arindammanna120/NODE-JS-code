const http=require("http");

// craete server

const server=http.createServer((req,res)=>{
    res.end('Welcome to node js')

});
server.listen(3100,()=>{
    console.log("server is listening port of 3100");
});

