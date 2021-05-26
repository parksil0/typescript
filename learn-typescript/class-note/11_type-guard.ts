interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number,
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 28, skill: 'Iron Making'}
}

var tony = introduce();
if((tony as Developer).skill) {
  console.log((tony as Developer).skill);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}