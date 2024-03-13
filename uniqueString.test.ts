// Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

const uniqueString = (str: string): string[] => {
  const res = [str[0]];
  for(let i = 1; i < str.length; i++){
    let char = str[i];
    if(char !== str[i - 1]){
      res.push(char);
    }
  }

  return res;
};

describe("testing uniqueString", () => {
  test("correct test #1 ", () => {
    const res = uniqueString("AAAABBBCCDAABBB");
    expect(res).toEqual(["A", "B", "C", "D", "A", "B"]);
  });
  test("correct test #2 ", () => {
    const res = uniqueString("ABBCcAD");
    expect(res).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
  });
  test("correct test #3 ", () => {
    const res = uniqueString("12233");
    expect(res).toEqual(["1", "2", "3"]);
  });
});
