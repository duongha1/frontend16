const fs = require('fs');
const http = require('http'); //include http module

const server = http.createServer((req, res)=>{
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
});
server.listen(8000,'127.0.0.1', (/*callback function*/)=>{ //create incoming request on the local host IP 
    console.log('Listening to requests on port 8000');
});