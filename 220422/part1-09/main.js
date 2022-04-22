console.log('hi');

let myName = 'huisu';
let email = 'my email';
let hello = `Hello ${myName}`;

console.log(myName); // huisu
console.log(email); // my email
console.log(hello); // Hello huisu

let number = 123;
let opacity = 1.57;

console.log(number); //123
console.log(opacity); //1.57

let checked = true;
let isShow = false;

console.log(checked); //true
console.log(isShow); //false

let undef;
let obj = {
  abc: 123,
};

console.log(undef); //undefined
console.log(obj.abc); //123
console.log(obj.xyz); // undefined

let empty = null;

console.log(empty); // null

let user = {
  // Key: Value,
  name: 'huisu',
  age: 31,
  isValid: true,
};

console.log(user.name); // huisu
console.log(user.age); // 31
console.log(user.isValid); // true

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4

let c = 12;
console.log(c); // 12

c = 999;
console.log(c); // 999

const d = 12;
console.log(d); // 12

//d = 999;
//console.log(d); // TypeError: Assignment to constant variable.

// 함수 선언
function helloFunc() {
  //실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

function returnFunc() {
  return 123;
}

let e = returnFunc();

console.log(e); // 123

// 함수 선언
function sum(a, b) {
  // a 와 b 는 매개변수 (Parameters)
  return a + b;
}

// 재사용!
let f = sum(1, 2); // 1 과 2 는 인수 (Arguments)
let g = sum(7, 12);
let h = sum(2, 4);

console.log(f, g, h); // 3, 19, 6

// 기명(이름이 있는) 함수
// 함수선언!
function hello1() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function () {
  console.log('World~');
};

//함수 호출!
hello1(); // Hello~
world(); // World~

// 객체 데이터
const heropy = {
  name: 'HEROPY',
  age: 85,
  // 메소드 Method
  getName: function () {
    return this.name;
  },
};

const hisname = heropy.getName();
console.log(hisname); // HEROPY
console.log(heropy.getName()); // HEROPY

let isShow2 = true;
let checked2 = false;

if (isShow2) {
  console.log('Show!'); // Show!
}

if (checked2) {
  console.log('Checked');
}

if (isShow2) {
  console.log('Show!!');
} else {
  console.log('Hide?');
}

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('Click!');
});

boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); //false

const boxEls = document.querySelectorAll('.box');

console.log(boxEls);

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // 1

// Setter, 값을 지정하는 용도
boxEl.textContent = 'BOX';
console.log(boxEl.textContent); // BOX

const A = 'Hello!';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse:  배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환

const B = A.split('').reverse().join(''); // 메소드 체이닝

console.log(A); // Hello!
console.log(B); // !olleH
