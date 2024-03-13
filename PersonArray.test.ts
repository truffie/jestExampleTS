// Создайте класс PersonArray, который имеет свойство array (массив объектов
//   Person) и методы:
//   getNames(): string[] - возвращает массив имен всех людей.
//   getAdults(): Person[] - возвращает массив только совершеннолетних людей.
//   getAverageAge(): number - возвращает средний возраст всех людей.
interface IPersonArray {
  array: IPerson[];
  getNames(): string[];
  getAdults(): IPerson[];
  getAverageAge(): number;
}
interface IPerson {
  name: string;
  age: number;
}

class PersonArray implements IPersonArray {
  array: IPerson[] = [
    { name: "truffie", age: 22 },
    { name: "bulki", age: 16 },
    { name: "tarelka", age: 18 },
    { name: "babybon", age: 4 },
  ];
  getNames(): string[] {
    return this.array.map((el) => el.name);
  }
  getAdults(): IPerson[] {
    return this.array.filter((el) => el.age >= 18);
  }
  getAverageAge(): number {
    return this.array.reduce((prev, cur) => prev += cur.age / this.array.length , 0) ;
  }
}
const MyList = new PersonArray();
describe('testing for PersonArray', () => {
  test('correct getNames() ', () => {
    const res = MyList.getNames();
    expect(res).toEqual(['truffie','bulki','tarelka','babybon'])
  });
  test('correct getAdults()', () => {
    const res = MyList.getAdults();
    expect(res).toEqual([{ name: 'truffie', age: 22 }, { name: 'tarelka', age: 18 }])
  })
  test('correct getAverageAge()',() => {
    const res = MyList.getAverageAge();
    expect(res).toBe(15)
  })
});