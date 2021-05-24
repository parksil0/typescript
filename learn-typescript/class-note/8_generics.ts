function logText<T>(text: T): T {
  console.log(text);
  return text; 
}

const str = logText<string>('hello!');
const num = logText<number>(100);
const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logTextLength<string>(['hello!', 'hi!']);

// 제네릭 타입 제한2 = 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2('a');
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('price');