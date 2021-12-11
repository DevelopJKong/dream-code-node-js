// Buffer
// Fixed-side check of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);

console.log(buf.length);
console.log(buf.buf[0]);
console.log(buf.buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast

buf2[0] = 72;
buf3[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
console.log(newBuf.toString());