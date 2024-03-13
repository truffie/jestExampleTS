// `Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.

const findPairWithSum = (numbers: number[], targetSum: number): [number, number] | null => {
  try {
    for(let num of numbers){
      if(isNaN(num)) throw new Error("numbers includes NaN values")
    }
      if(isNaN(targetSum)) throw new Error("targetSum is NaN")
    for (let i = 0; i < numbers.length; i++) {

      for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] + numbers[i] === targetSum && j !== i) {
          return [numbers[i], numbers[j]];
        }
      }
    }
    return null;
  } catch (error) {
    return error.message
  }
};
console.log(findPairWithSum([1, 2, 3, 4, 5, 6], 0));

describe("findPairWithSum test", () => {
  test("correct positive values", () => {
    expect(findPairWithSum([1, 2, 3, 4, 5, 6], 10)).toEqual([4, 6]);
    expect(findPairWithSum([1, 2], 3)).toEqual([1, 2]);
    expect(findPairWithSum([1, 2], 4)).toBeNull();
  });
  test("correct negative and positive values", () => {
    expect(findPairWithSum([-1, 2], 1)).toEqual([-1, 2]);
    expect(findPairWithSum([-1, 2,4,5,-10,-22], -32)).toEqual([-10,-22]);
    expect(findPairWithSum([-1, 2,-100,5], -98)).toEqual([2, -100]);
    expect(findPairWithSum([-1, -2,-100,5], -3)).toEqual([-1, -2]);

  })
  test("targetSum is NaN, should be return an error", () => {
    expect(findPairWithSum([1,2],NaN)).toBe("targetSum is NaN")
  })
  test("arrNumbers includes NaN values should be return an error", () => {
    expect(findPairWithSum([1,9,NaN],10)).toBe("numbers includes NaN values")
    expect(findPairWithSum([1,NaN,9],10)).toBe("numbers includes NaN values")
    expect(findPairWithSum([1,NaN,2],10)).toBe("numbers includes NaN values")
  })
});
