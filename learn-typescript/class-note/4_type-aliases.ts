// interface Person {
//   name: string;
//   age: number;
// }

// 타입은 확장(상속)이 되지 않는다.
// 타입보다 인터페이스를 선언하여 사용하는 것을 추천한다(타입스크립트 공식문서 내용 중)
type Person = {
  name: string;
  age: number;
}

var seal: Person = {
  name: 'seal',
  age: 28
}

type MyString = string;
var str: MyString = 'hello!';

type Todo = { id: string; title: string; done: boolean; };

function getTodo(todo: Todo): void {

}