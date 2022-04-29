let x: [string, number];

x = ["hello", 39]; // 순서와 타입이 일치해야 함

x = [40, "hello"]; // erorr

x[3] = "world"; // index 위치도 일치해야한다. undefined

const person: [string, number] = ["mark", 39];

const [first, second, third] = person;
