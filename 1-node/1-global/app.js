//프론트 엔드 에서는 만약에 객체를 선언하면
//window 아래 객체가 생성되는것이고

//백엔드(node) 에서 객체를 선언하면
//global 이라는 객체 아래에 생성되게 된다

const fs = require('fs');

console.log(global);

global.hello = () => {
    console.log('hello');
};

global.hello();

hello();