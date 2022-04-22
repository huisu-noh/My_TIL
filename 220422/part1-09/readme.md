## JS 선행

## Part.01 - Ch.09

### 개요

##### 표기법

- dash-case(kabab-case): HTML, CSS
- snake_case: HTML, CSS
- camelCase: Javascript
- ParcelCase: Javascript

- Zero-based Numbering

  - 0 기반 번호 매기기!
  - 특수한 경우를 제외하고 0부터 숫자를 시작합니다

- 주석 Comments

```js
// 한 줄 메모
/* 한 줄 메모 */
/**
 * 여러 줄
 * 메모1
 * 메모2
 * /
```

### 데이터 종류 (자료형)

##### String (문자 데이터)

- 따옴표를 사용합니다.

```js
let myName = 'huisu';
let email = 'my email';
let hello = `Hello ${myName}`;

console.log(myName); // huisu
console.log(email); // my email
console.log(hello); // Hello huisu
```

##### Number (숫자 데이터)

- 정수 및 부동소수점 숫자를 나타냅니다.

```js
let number = 123;
let opacity = 1.57;

console.log(number); //123
console.log(opacity); //1.57
```

##### Boolean (불린 데이터)

- true(참), false(거짓) 두 가지 값밖에 없는 논리 데이터입니다.

```js
let checked = true;
let isShow = false;

console.log(checked); //true
console.log(isShow); //false
```

##### Undefined

- 값이 할당되지 않은 상태를 나타냅니다.

```js
let undef;
let obj = {
  abc: 123,
};

console.log(undef); //undefined
console.log(obj.abc); //123
console.log(obj.xyz); // undefined
```

##### Null

- 어떤 값이 의도적으로 비어있음을 의미 합니다.

```js
let empty = null;

console.log(empty); // null
```

##### Object (객체 데이터)

- 여러 데이터를 Key:Value 형태로 저장 합니다. {}

```js
let user = {
  // Key: Value,
  name: 'huisu',
  age: 31,
  isValid: true,
};

console.log(user.name); // huisu
console.log(user.age); // 31
console.log(user.isValid); // true
```

##### Array (배열 데이터)

- 여러 데이터를 순차적으로 저장합니다. []

```js
console.log(user.name); // huisu
console.log(user.age); // 31
console.log(user.isValid); // true

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```

### 변수, 예약어

##### 변수

- 데이터를 저장하고 참조(사용) 하는 데이터의 이름
- var, let, const
- 재사용이 가능!

```js
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4
```

###### let: 값(데이터) 의 재할당 가능 !

```js
let c = 12;
console.log(c); // 12

c = 999;
console.log(c); // 999
```

###### const: 값(데이터)의 재할당 불가능

```js
const d = 12;
console.log(d); // 12

d = 999;
console.log(d); // TypeError: Assignment to constant variable.
```

##### 예약어

- 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
- Reserved Word
- this, if, break 등

### 함수 function

- 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

```js
// 함수 선언
function helloFunc() {
  //실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

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
```

### 조건문

- 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문
- if, esle

```js
if (isShow2) {
  console.log('Show!'); // Show!
}

if (checked2) {
  console.log('Checked');
}

if (isShow2) {
  console.log('Show!!'); // Show!!
} else {
  console.log('Hide?');
}
```

### DOM API (Document Objecr Model, Application Programming Interface)

```html
<script defer src="../js/220425.js"></script>
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
```

```js
// HTML 요소 (Element) 1개 검색, 찾기
const boxEl = document.querySelector('.box');
// HTML 요소에 적용 할 수 있는 메소드!
boxEl.addEventListener();
// 인수 (Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);
// 1. 이벤트 Event 상황
boxEl.addEventListener('click', 2);
// 2. 핸들러 Handler 실행할 함수
boxEl.addEventListener('click', function () {
  console.log('Click!');
});

// 요소의 클래스 정보 객체 활용!!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); //false
```

```js
// HTML 요소 모두 검색/ 찾기
const boxEls = document.querySelectorAll('.box');

console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가
boxEls.forEach(function () {});

// 첫 번째 매개변수 : 반복 중인 요소 boxEl
// 두 번째 매개변수: 반복 중인 번호 index
boxEls.forEach(function () {
  boxEl, index;
});

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // 1

// Setter, 값을 지정하는 용도
boxEl.textContent = 'BOX';
console.log(boxEl.textContent); // BOX
```

### 메소드 체이닝 Method Chanining

```js
const A = 'Hello!';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse:  배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환

const B = A.split('').reverse().join(''); // 메소드 체이닝

console.log(A); // Hello!
console.log(B); // !olleH
```
