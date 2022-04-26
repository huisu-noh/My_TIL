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

### JS 함수

##### 화살표 함수

- () => {} vs function () {}

```js
const double = function (x) {
  return x * 2;
};

console.log('double: ', double(7));

const doubleArrow = (x) => x * 2;
//const doubleArrow = x => x * 2;  () 매개변수가 1개면 생략 가능

console.log('double: ', doubleArrow(7));
```

- 객체를 반환 할 시, ({name: huisu})

##### IIFE 즉시실행함수 Immdiately-Invoked Function Expression

```js
const a = 7;
function double() {
  console.log(a * 2);
}

double();

// 즉시 실행 함수 (f)() ||  (f())
(function () {
  console.log(a * 2);
})();
```

##### 호이스팅 Hoistiong

- 함수 선언부가 유효범위 최상당으로 끌어올려지는 현상

```js
const a = 7;

double(); // TypeError: double is not a function

const double = function () {
  console.log(a * 2);
}; // 함수 표현식은 실행 당시에 생성이 되기 때문에, 호이스팅이 안된다.
```

```js
const a = 7;

double(); // 14

function double() {
  console.log(a * 2);
} // 함수 선언식은 바로 선언되기 때문에, 호이스팅이 가능하다
```

##### 타이머 함수

- setTimeout(함수, 시간): 일정 시간 후 함수 실행
- setInterval(함수, 시간): 시간 간격마다 함수 실행
- clearTimeout(): 설정된 Timeout 함수를 종료
- clearInterval(): 설정된 Interval 함수를 종료

```js
// 한번만
const timer = setTimeout(() => {
  console.log('huisu');
}, 3000);

const h1El = document.querySelector('h1');

h1El.addEventListener('click', () => {
  clearTimeout(timer);
});

// 계속
const timer = setInterval(() => {
  console.log('huisu');
}, 3000);

const h1El = document.querySelector('h1');

h1El.addEventListener('click', () => {
  clearInterval(timer);
});
```

##### 콜백 Callback

- 함수의 인수로 사용되는 함수

```js
function timeout(callback) {
  setTimeout(() => {
    console.log('hello');
    callback();
  }, 3000);
}

timeout(() => {
  console.log('Done!');
});
```

### JS 클래스

##### 생성자 함수 prototype

```js
const huisu = {
  firstName: 'huisu',
  lastName: 'Noh',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(huisu);
console.log(huisu.getFullName());

const janghun = {
  firstName: 'janghun',
  lastName: 'Lee',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(janghun.getFullName());

const hojun = {
  firstName: 'hojun',
  lastName: 'Noh',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(hojun.getFullName());

// 같은 내용을 반복적으로 작성 = 비효율
```

```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const huisu = new User('huisu', 'Noh'); // new f (): 생성자 함수
const janghun = new User('jang', 'Lee');
const hojun = new User('hojun', 'Noh');

console.log(huisu); // 인스턴스
console.log(janghun);
console.log(hojun);

console.log(huisu.getFullName());
console.log(janghun.getFullName());
console.log(hojun.getFullName());
```

##### ES6 Classes

```js
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

##### this

- 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
- 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

- 일반 함수를 써야 하는 예시

```js
const huisu = {
  name: 'huisu',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

huisu.normal();
huisu.arrow(); // undefined
```

- 화살표 함수를 써야 하는 예시

```js
const timer = {
  name: 'huisu!',
  timeout: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // undefined

const timer = {
  name: 'huisu!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // huisu!
```

##### 상속 (확장)

```js
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const MyVehicle = new Vehicle('운송수단', 2);
console.log(MyVehicle);

// extends 확장, 상속
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

console.log(new Bicycle('삼천리', 2));
console.log(new Car('기아', 4, '필요하다'));
```
