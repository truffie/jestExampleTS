// Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера

function chunkArray(array: any[], size: number): any[][] {
  const resArr: any[] = [];
  try {
    for (let i = 0; i < array.length; i += size) {
      resArr.push(array.slice(i, i + size));
    }

    return resArr;
  } catch (error) {
    return error.message;
  }
}
describe("chunkArray testing", () => {
  test("correct values", () => {
    const array = [1,2,3,4,5];
    expect(chunkArray(array,1)).toEqual([[1],[2],[3],[4],[5]])
    expect(chunkArray(array,2)).toEqual([[1,2],[3,4],[5]])
    expect(chunkArray(array,3)).toEqual([[1,2,3],[4,5]])
    expect(chunkArray(array,4)).toEqual([[1,2,3,4],[5]])
    expect(chunkArray(array,5)).toEqual([[1,2,3,4,5]])
  });
});
