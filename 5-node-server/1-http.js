const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>{
    const url = req.url;    
    res.setHeader('Content-Type','text/html');
    if(url === '/'){
        // res.write("<html>");
        // res.write("<head><title>Academy</title></head>");
        // res.write("<body><h1>Welcome!</h1></body>")
        // res.write("</html>");
        fs.createReadStream("./html/index.html").pipe(res);
        console.log(fs.createReadStream("./html/index.html").pipe(res));
        
    } else if( url === '/course') {
        // res.write("<html>");
        // res.write("<head><title>Academy</title></head>");
        // res.write("<body><h1>Course</h1></body>")
        // res.write("</html>");
        fs.createReadStream("./html/coures.html").pipe(res);
        
    } else {
        // res.write("<html>");
        // res.write("<head><title>Academy</title></head>");
        // res.write("<body><h1>Not Found</h1></body>")
        // res.write("</html>");
        fs.createReadStream("./html/404.html").pipe(res);
        
    }
    res.end();
}); 
server.listen(4030);