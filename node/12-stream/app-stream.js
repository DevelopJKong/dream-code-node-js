const fs = require('fs');

const readStream = fs.createReadStream('./file.txt',{
    //highWaterMark: 8, // 64 kbytes
    //encoding: 'utf-8' 
});
const data = [];
readStream.on('data', (chunk) => {
    //console.log(chunk);
    data.push(chunk);
    console.count('data');
});
readStream.on('end', () => {
    console.log(data.join(''));
})
readStream.on('error', error => {
    console.log(error);
})

//체인닝을 해서 on 을 계속해서 연결해줄수 있습니다
//once도 사용해서 한번만 출력도 가능합니다