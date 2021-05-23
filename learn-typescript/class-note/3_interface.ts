interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seal: User = {
  age: 28,
  name: '실'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
  
}

const parksil = {
  age: 28,
  name: 'parksil'
}
getUser(parksil);

//함수에 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0]; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value) {})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var ssil: Developer = {
  name: 'ParkSil',
  age: 28,
  language: 'TypeScript'
}