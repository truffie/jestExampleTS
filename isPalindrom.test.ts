// Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word?: any): any {
  try {
    if (word === null) return word;
    if (!word) throw new Error("empty data");
    if (typeof word !== "string") throw new Error("invalid type data");
    for (let i = 0; i < word.length; i++) {
      if (word.at(i) !== word.at(i * -1 - 1)) {
        return false;
      }
    }
    return true;
  } catch (error: any) {
    return error.message;
  }
}

describe("isPalindrome test", () => {
  const wordsTrue = ["abba", "assssa", "banknab"];
  const wordsFalse = ["abs", "caca"];
  test("true words testing", () => {
    for (let word of wordsTrue) {
      const res = isPalindrome(word);
      expect(res).toBeTruthy();
    }
  });
  test("false words testing", () => {
    for (const word of wordsFalse) {
      const res = isPalindrome(word);
      expect(res).toBeFalsy();
    }
  });
  test("testing on error, should be return an error", () => {
    expect(isPalindrome(null)).toBeNull();
    expect(isPalindrome()).toBe("empty data");
    expect(isPalindrome(NaN)).toBe("empty data");
    expect(isPalindrome("")).toBe("empty data");
    expect(isPalindrome(1)).toBe("invalid type data");
  });
});
