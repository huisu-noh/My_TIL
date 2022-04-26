import getType from './getType';
import random from './getRandom';

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
console.log(new Bicycle('세발자전거', 3));
console.log(new Car('기아', 4, '필요하다'));
