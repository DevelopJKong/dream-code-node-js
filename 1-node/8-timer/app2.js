const process = require('process');

console.log('code1');

//timeout을 사용한다고 해서 무조건 0 가 걸리는것은아니다
//스택에 있는 모든것들이 다 사라져야지 수행되기 때문에 정확하게 보장되지는 않는다
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
},0); 

console.log('code2');
setImmediate(() => {
    console.log('setImmediata');
});

console.log('code3')
process.nextTick(() => {
    console.log('nexTick');
});