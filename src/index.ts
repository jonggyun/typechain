class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
// interface와 class의 차이는? 뭐지?? 둘다 사용 가능한듯.

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): void => { // ?를 통해서 선택적으로 사용할 수 있음.
  console.log(`Hello! ${person.name} you are ${person.age}, you are a ${person.gender}!!`);
}

// const sayHi: (name: any, age: any, gender?: any) => void
sayHi(lynn);

export {}; // typescrip 규칙인듯. 이거 없으면 위에 에러남.