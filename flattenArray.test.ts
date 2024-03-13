// Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности

const res: any[] = [];
const flattenArray = (array: any[]): any[] => {
  try {
    if (!array.length) throw new Error("empty array!");
    return array.flat(Infinity);
  } catch (error: any) {
    return error.message;
  }
};
describe("testing for flattenArray", () => {
  test("correct flatting", () => {
    const arr = [1, 2, [], [1, 2], [2, []]];
    const arr2 = [1, 2, [[[[1, 2]]]], [1, 2], [2, []]];
    const arrFlat = flattenArray(arr);
    const arrFlat2 = flattenArray(arr2);
    expect(arrFlat).toEqual([1, 2, 1, 2, 2]);
    expect(arrFlat2).toEqual([1, 2, 1, 2, 1, 2, 2]);
  });
  test("array is't array should be return an error", () => {
    expect(flattenArray([])).toBe("empty array!");
  });
});
