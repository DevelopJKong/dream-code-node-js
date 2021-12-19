console.log(); // 개발
console.info(); // 정보
console.warn(); // 경보
console.error(); // 에러, 사용자 에러, 시스템 에러




//assert
console.assert(2 === 3, 'not same');
console.assert(2 === 2, 'same!');

//print object
const student = {name : 'jeongbin', age: 29};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth:0});

//measuring time
console.time('for loop');
for(let i = 0; i< 10; i++) {
	i++;
}

console.timeEd('for loop');


//count
function a() {
	console.count('a function');
}

a();
console.countReset(); //count 리셋하기
a();



//trace

function f1() {
	f2();
}

function f2() {
	f3();
}

function f3() {
	console.log('f3');
	console.trace();
}

f1();