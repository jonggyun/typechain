interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'park',
  age: 11,
  gender: 'male'
}

const sayHi = (person: Human): void => { // ?를 통해서 선택적으로 사용할 수 있음.
  console.log(`Hello! ${person.name} you are ${person.age}, you are a ${person.gender}!!`);
}

// const sayHi: (name: any, age: any, gender?: any) => void
sayHi(person);

export {}; // typescrip 규칙인듯. 이거 없으면 위에 에러남.