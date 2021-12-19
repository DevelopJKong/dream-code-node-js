const fs = require('fs');
const zilb = require('zlib');

const readStream = fs.createWriteStream('./file.txt');
const zilbStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.txt');
const piping = readStream.pipe(zilbStream).pipe(writeStream);

piping.on('finish',() => {
    console.log('done!');
});

//왜 안되는지 잘 모르겠다.. 일단은 stream 과 pipe 에 대해서는 이해는 된다

const http = require('http');
const server = http.createServer((req,res)=>{
    // fs.readFile('file.txt',(err,data) => {
    //     res.end(data);
    // });
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});

server.listen(3000);