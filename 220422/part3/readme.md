## JavaScript Essentials

## Part. 3

### JS 시작하기

##### 데이터 타입 확인

```js
// getType.js
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

// main.js
import getType from './getType';

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
```

###### 산술, 할당 연산자 arithmetic operator

```js
console.log(1 + 2);
console.log(5 - 8);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5); // 7을 5로 나눈 후 남은 수, 나머지 값

let a = 2; // 할당 연산자
console.log(a);
//a = a + 1;  재할당
a += 1;
console.log(a);
a -= 1;
console.log(a);
a *= 1;
console.log(a);
a /= 1;
console.log(a);
a %= 1;
console.log(a);
```

###### 비교 comparison operator

```js
const b = 1;
let c = 1;
console.log(b === c); // 일치 연산자 true
c = 3;
console.log(b === c); // false

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(2, '2')); // false

console.log(b !== c); // 불일치 연산자 true
console.log(b <= c); // 비교 연산자 true
console.log(b >= c); // false
```

###### 논리 연산자 logical operator

```js
const a = 1 === 1;
const b = 'AB' === 'AB';
const c = false;

console.log(a);
console.log(b);
console.log(c);

console.log('&&: ', a && b && c); // and  false
console.log('||: ', a || c); // or  true
console.log('!: ', !a); // not false
console.log('!:', !c); // true
```

###### 삼항 연산자 ternary operator

```js
const a = 1 < 2; // true

if (a) {
  console.log('참');
} else {
  console.log('거짓');
}
// 참

console.log(a ? '참' : '거짓'); // 참
```

###### 조건문 If Else (If statement)

```js
function random() {
  return Math.floor(Math.random() * 10);
}

const a = random();

if (a === 0) {
  console.log('a is 0');
} else if (a === 2) {
  console.log('a is 2');
} else if (a === 4) {
  console.log('a is 4');
} else {
  console.log('rest...');
}
```

###### 조건문 Switch statement

```js
switch (a) {
  case 0:
    console.log('a is 0');
    break;
  case 2:
    console.log('a is 2');
    break;
  case 4:
    console.log('a is 4');
    break;
  default:
    console.log('rest...');
}
```

###### 반복문 For statement

- for (시작조건; 종료조건; 변화조건) {}

```html
<ul></ul>
```

```js
const ulEl = document.querySelector('ul');

for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li');
  li.textContent = `List-${i + 1}`;
  ulEl.appendChild(li);
}
```

###### 변수 유효 범위 Variable Scope

- var, let, const
- let, const: 블럭 레벨
  - const 주사용
  - 재할당이 필요할 때 let 사용
- var: 함수 레벨 (유효 범위가 더 넓음)
  - 메모리 누수가 발생 할 수 있다
  - 사용을 권장 하지 않음

###### 형 변환 Type conversion

- ==: 동등연산자, 형 병환이 일어나면 값만 비교해서 의도 하지 않은 true가 나올 수 있음
- ===: 일치연산사, 자료의 타입까지 같아야 함
- Truthy: 참 같은 값
  - true, {}, [], 1, 2, "false", -12, "3.14" ...
- Falsy: 거짓 같은 값
  - false, "", null, undefined, -0, 0, Nan

```js
const a = 1;
const b = '1';

console.log(a === b); // false
console.log(a == b); // true
```
