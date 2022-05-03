## TypeScript Essentials

## Part 5 Ch. 05

### Interfaces

```ts
function hello1(person: { name: string; age: number }): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p1: { name: string; age: number } = {
  name: "Mark",
  age: 39,
};

hello1(p1);
```

```ts
// { name: string; age: number } 대신
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 39,
};
```

```js
//컴파일후
"use strict";
function hello1(person) {
  console.log(`안녕하세요 ${person.name}입니다.`);
}
const p1 = {
  name: "Mark",
  age: 39,
};
hello1(p1);
```

### optional property

```ts
interface Person2 {
  name: string;
  age?: number; // age || undefined
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

hello2({ name: "huisu", age: 31 });
hello2({ name: "janghun" });
```

```ts
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const p31: Person3 = {
  name: "huisu",
  age: 31,
};

const p32: Person3 = {
  name: "janghun",
  systers: ["Sung", "Chan"],
};

const p33: Person3 = {
  name: "hojun",
  father: p31,
  mother: p32,
};

hello3(p33);
```

### function in interface

```ts
interface Person4 {
  name: string;
  age?: number;
  hello(): void;
}

const p41: Person4 = {
  name: "huisu",
  age: 31,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  },
};

const p42: Person4 = {
  name: "huisu",
  age: 31,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  },
};

const p43: Person4 = {
  name: "huisu",
  age: 31,
  hello: (): void => {
    console.log(`안녕하세요! ${this.name} 입니다!`); // this 사용 불가
  },
};

p41.hello(); // 안녕하세요! huisu 입니다!
```

### class implements interface

```ts
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

const person12: IPerson1 = new Person("huisu");
```

### interface extends interface

```ts
interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "huisu",
  city: "서울",
};
```

### function interface

```ts
interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number) {
  console.log(`안녕! ${name}이야.`);
};
```

### Readonly Interface Properties

```ts
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "hojun",
  gender: "male",
};

p81.gender = "female"; // error 변경 불가능
```

### type alias vs interface

```ts
function
// type alias
type EatType = ( food: string ) => void;

// interface
interface IEat {
  (food: string): void;
}
```

```ts
Array;
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}
```

<img src ="./imgs/interface.PNG">

<img src ="./imgs/alias.PNG">

## Part 5 Ch. 06

### Classes

- object를 만드는 blueprint(청사진, 설계도)
- 클래스 이전에 object를 만드는 기본적인 방법은 function
- JS 에도 class 는 ES6 부터 사용 가능
- OOP 을 위한 초석
- TypeScript 에서는 클래스도 사용자가 만드는 타입의 하나

```ts
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("huisu");
```

- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다
- new 를 이용하여 class를 통해 object를 만들 수 있다.
- constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
- this 를 이용해서 만들어진 object를 가리킬 수 있다.
- JS 컴파일되면 es5의 경우 function 으로 변경된다.
