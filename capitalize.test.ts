// Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы

const capitalizeString = (str: string): string => {
  try {
    if (!str.length) throw new Error("empty string");
    if (!str) throw new Error("empty string");
    const splittedStr = str.split(" ").filter((el) => el !== "");
    if(!splittedStr.length) throw new Error("empty string after filter")
    return splittedStr.map((el) => el[0].toUpperCase() + el.slice(1)).join(" ");
  } catch (error: any) {
    return error.message;
  }
};

describe("capitalizeString testing", () => {
  test("capitalize 2 words", () => {
    expect(capitalizeString("hello world")).toBe("Hello World");
  });
  test("capitalize 1 word", () => {
    expect(capitalizeString("hello")).toBe("Hello");
  });
  test("capitalize without trim", () => {
    expect(capitalizeString(" a ")).toBe("A");
  });
  test("capitalize without trim #2", () => {
    expect(capitalizeString(" hello               world    !")).toBe("Hello World !")
  });
  test('empty string should be return an error ', () => {
    expect(capitalizeString("")).toBe("empty string")
  });
  test('should ', () => {
    expect(capitalizeString(" ")).toBe("empty string after filter")
  });
});
