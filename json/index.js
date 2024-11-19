


const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('Welcome to my application');

    if(req.url=='/product'){
        //response ends
         res.end('This is product page');
    }
    else if(req.url=='/user'){
        res.end('This is user page');
    }
    //modifying response
  res.end("Response received at port 8080");
});
server.listen(6060, () => {
  console.log("server is listening at port 8080");
});
module.exports = server;
