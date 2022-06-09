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

let people: {
  name: string;
  age: number;
}[];
```

### Type inference

```ts
let course = "React - The Complete Guide";

course = 122341; // error  타입을 추론해서 유추하고 타입을 정한다.

let name: string | number = "loo";
name = 12345; // 유니온 타입으로 2가지 이상의 타입 설정이 가능

let userName: string | string[]; // 배열도 가능 !
```

### Type Alias

```ts
type Person = {
  name: string;
  age: number;
};

let person: Person;

let person2: Person[];
```

### Functions & Types

```ts
function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}
```

### Generics

```ts
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
```

> 제네릭 자세히 살펴보기
>
> > 제네릭 유형("Generics")은 꽤 까다로울 수 있습니다.
> > 그러나 실제로 우리는 항상 그들과 함께 일하고 있습니다. 가장 두드러진 예 중 하나는 배열입니다.
> > 다음 예제 배열을 보시죠:
> > `let numbers = [1, 2, 3];`
> > 여기서 유형이 유추되지만 명시적으로 할당하면 다음과 같이 할 수 있습니다:
> > `let numbers: number[] = [1, 2, 3];` >> `number[]` 는 TypeScript 표기법으로써 "이것은 숫자의 배열입니다" 라고 정의하는 것입니다.
> > 그러나 실제로, `number[]`는 문법적 설탕입니다.
> > 실제 유형은 `Array`입니다. 모든 배열은 `Array` 유형입니다.
> > 그러나 배열 유형은 배열의 항목 유형도 설명하는 경우에만 의미가 있으므로 Array 은 실제로는 제네릭 유형입니다.
> > 위의 예를 다음과 같이 작성할 수도 있습니다:
> > `let numbers: Array<number> = [1, 2, 3];`
> > 여기에 다시 꺾쇠 괄호(<>)가 있습니다! 그러나 이번에는 (이전 강의에서 했던 것처럼) 우리 자신의 유형을 만드는 것이 아니라 TypeScript에 실제 유형이 "generic type placeholder"에 사용되야 한다고 하는 것입니다 (T, 이전 강의에서).
> > `let numbers = [1, 2, 3];`
> > 그러나 명시적으로 유형을 설정하려면 다음과 같이 할 수 있습니다:
> > `let numbers: Array<number> = [1, 2, 3];`
> > 물론 이 길고 투박한 유형을 작성하는 것은 약간 성가실 수 있습니다. 그래서 배열에 대해 다음과 같은 대안(문법적 설탕)이 있습니다:
> > `let numbers: number[] = [1, 2, 3];`
> > 이전 강의의 예를 들면 자리 표시자에 대한 구체적인 유형을 설정할 수도 있습니다. T명시적으로:
> > `const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');`
> > 따라서 꺾쇠 괄호를 사용하여 제네릭 유형을 정의할 수 있을 뿐만 아니라 제네릭 유형을 사용하고 사용해야 하는 자리 표시자 유형을 명시적으로 설정할 수도 있습니다. 때로는 TypeScript가 (올바른) 유형을 유추할 수 없는 경우에 필요합니다. 이 과정 섹션의 뒷부분에서 살펴보겠습니다!
