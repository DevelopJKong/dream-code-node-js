const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback -',args);
}

emitter.on('jeong',callback1);

emitter.on('jeong', (args) => {
    console.log('second callback -',args);
});

emitter.emit('jeong',{message:1});
emitter.emit('jeong',{message:2});
emitter.removeListener('ellie',callback1);
emitter.emit('jeong',{message:3});

