// function logMessage(value: any) {
//   console.log(value);  
// }

// logMessage('hello!');

// var seal: string | number;

// 유니온 타입 사용시 타입 구분
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정 
function logMessage(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString();
  }

  if(typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello!');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   // 각 유니온 타입안의 속성이 공통된 부분만 타입을 통과시키고, 나머지는 다른 로직이 필요하다.
//   // someone.name;
// }

// askSomeone({ name: 'Developer', skill: '웹 개발'});
// askSomeone({ name: 'seal', age: 28});

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone({ name: 'Developer', skill: '웹 개발', age: 28 });
askSomeone({ name: 'seal', skill: 'Web development', age: 28 });

var seal : string | number | boolean;
// intersection(인터섹션) = &
var seal2 : string & number & boolean;