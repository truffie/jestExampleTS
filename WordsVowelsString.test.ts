// Задача состоит в создании класса Words, который имеет поле array,
// содержащее массив строк (например, ['sun', 'air', 'sky', 'island']), и метод getWordsFstVowels().
// Этот метод должен вернуть строку, которая является результатом конкатенации всех слов массива,
// начинающихся с гласной буквы. Массив слов должен быть инициализирован в конструкторе класса.
interface IWordsVowelsString {
  getWordsFstVowels(arr: string[]): string;
}
class WordsVowelsString implements IWordsVowelsString {
  getWordsFstVowels(array: string[]): string {
    try {
      if (!array.length) throw new Error("empty array");
      for (let el of array) {
        if (el === "") throw new Error("array includes  empty string");
      }
      return array.reduce((acc, word) => (/^[aeiou]/gi.test(word) ? acc + word : acc), "");
    } catch (error: any) {
      return error.message;
    }
  }
}
const wordsVowelsString = new WordsVowelsString();

describe("testing WordsVowelsString", () => {

  test("correct test #1", () => {
    const res = wordsVowelsString.getWordsFstVowels(["sun", "air", "sky", "island"]);
    expect(res).toBe("airisland");
  });

  test("correct test #2", () => {
    const res = wordsVowelsString.getWordsFstVowels(["air", "air", "sky", "island"]);
    expect(res).toBe("airairisland");
  });

  test("array includes empty string should be return an error ", () => {
    expect(wordsVowelsString.getWordsFstVowels([""])).toBe("array includes  empty string");
    expect(wordsVowelsString.getWordsFstVowels(["d", ""])).toBe("array includes  empty string");
  });

  test("empty array should be return an error", () => {
    expect(wordsVowelsString.getWordsFstVowels([])).toBe("empty array");
  });

});
