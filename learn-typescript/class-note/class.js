function Person(name, age) {
  this.name = name;
  this.age = age;
}

var seal = new Person('seal', 100);

// ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seal = new Person('실', 28); // 생성 되었습니다.
console.log(seal);