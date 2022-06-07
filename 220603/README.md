# TypeScript

## Adding Type Safety To React Apps

## What ? & Way?

> TypeScript is a **superset** to JavaScript
>
> > 뿌리는 여전히 자바스크립트 이다.
> > 자바스크립트의 기본적인 문법들과 자바스크립트 코드 작성법, if 문, for 반복문, 객체 사용법등을 그대로 사용한다.
> > 타입스크립트는 자바스크립트에 몇가지 기능을 추가한 것이다.
> > **Statically Typed**의 특징을 가진다.

```ts
function add(a: number, b: number) {
  return a + b;
}

add("2", "5"); // 숫자로 타입이 지정되어있기 때문에, 코드 작성시 오류 발생
add(2, 5); // 7
```

- `npm install typescript` 설치하기
- `npx tsc 파일명.ts` 컴파일 하기

---

## 유형

- Primitives: number, string, boolean
- More complex types: arrays, objects
- Function types, parameters

---

### Primitives

```ts
let age: number;

age = 12.1;

let useName: string;

useName = "Loo";

let isInstructor: boolean;

isInstructor: ture;
```

---

### More complex types

```ts
let hobbies: string[];

hobbies = ["Sports", "Cooking", "12"];

let person: any; // any 어떤 타입이든 들어올 수 있다. 예비적으로 사용되는 타입 💩

let person: {
  name: string;
  age: number;
  isEmployee: boolean;
};

person = {
  name: "loo",
  age: 31,
};

person = {
  isEmployee: true,
};
```
