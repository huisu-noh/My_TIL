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
