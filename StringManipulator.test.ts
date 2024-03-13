// Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.

interface IStringManipulator {
  text: string;
  getCharacterCount(): number;
  getWords(): string[];
  getReversedText(): string;
}

class StringManipulator implements IStringManipulator {
  text: string;
  constructor(str: string) {
    this.text = str;
  }
  getCharacterCount() {
    return this.text.length;
  }
  getWords() {
    return this.text.split(" ");
  }
  getReversedText() {
    return this.text.split("").reverse().join("");
  }
}
const stringManipulator = new StringManipulator("abra ka dabra");

describe("testing StringManipualor", () => {
  test("correct getCharacterCount()", () => {
    const res = stringManipulator.getCharacterCount();
    expect(res).toBe(13)
  });
  test("correct getWords()", () => {
    const res = stringManipulator.getWords();
    expect(res).toEqual(["abra", "ka", "dabra"]);
  });
  test("correct getReversedText()", () => {
    const res = stringManipulator.getReversedText();
    expect(res).toBe("arbad ak arba");
  });
});
