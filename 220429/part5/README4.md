## TypeScript Essentials

## Part 5 Ch. 07

### Generics, Any 와 차이점

```ts
function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들

function hello(message: any): any {
  return message;
}

console.log(hello("soo").length);
console.log(hello(31).length);

function helloGeneric<T>(message: T): T {
  return message;
}
```

### Generics Basic

```ts
function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("soo", 31);
helloBasic(36, 25);
```

### Generics Array & Tuple

```ts
function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["hello", "world"]);
helloArray(["hello", 5]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["hello", "world"]);
helloTuple(["hello", 5]);
```

### Generics Funtion

```ts
type HelloFunctionGeneric1 = <T>(message: T) => T;

const HelloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};
```

### Generics Class

```ts
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Soo", 31);
// new Person<string>(31);
new Person<string, number>("Soo", "age");
```

### Generics with extends

```ts
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Soo");
new PersonExtends(39);
new PersonExtends(true);
```

### keyof & type lookup system

```ts
interface IPerson {
  name: string;
  age: number;
}

const person3: IPerson = {
  name: "Soo",
  age: 31,
};

type Keys = keyof IPerson;

const keys: Keys = "age";

// IPerson[keyof IPerson]
//=> IPerson['name' | 'age']
//=> IPerson['name'] | IPerson['age']
//=> string | number
function getProp<T, K extends keyof T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}

getProp(person3, "name");

function setProp<T, K extends keyof T>(obj: T, key: keyof T, value: T[K]): void {
  obj[key] = value;
}

setProp(person3, "name", "Soo");
```
