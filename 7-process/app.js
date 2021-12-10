const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');
});


//nextTick 함수는 다른 콜백함수가 들어있어도 이것을 먼저 실행해준다
process.nextTick(()=> {
    console.log('nextTrick'); 
});