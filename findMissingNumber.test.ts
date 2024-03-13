// Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.

const findMissingNumber = (numbers: number[]): number => {
  try {
    if (!numbers.length) throw new Error("empty arrNumbers");
    for (let num of numbers) {
      if (isNaN(num)) throw new Error("NaN value in array");
    }
    const filtered = numbers.filter((el, i, arr) => arr[i + 1] !== el + 1 && i !== arr.length - 1);
    if (!filtered.length) throw new Error("no missing number in array");
    return filtered[0] + 1;
  } catch (error) {
    return error.message;
  }
};
describe("Name of the group", () => {
  test("correct arrNumbers", () => {
    expect(findMissingNumber([1, 2, 4])).toBe(3);
    expect(findMissingNumber([4, 6, 7])).toBe(5);
    expect(findMissingNumber([5, 6, 8])).toBe(7);
  });
  test("empty array should be return an error", () => {
    expect(findMissingNumber([])).toBe("empty arrNumbers");
  });
  test("array without missing number should be return an error", () => {
    expect(findMissingNumber([1, 2, 3])).toBe("no missing number in array");
  });
  test("array include NaN values should be return an error", () => {
    expect(findMissingNumber([1, NaN, 2])).toBe("NaN value in array");
  });
});
