import { getWordFromValues } from "./getWordFromValues.js";
describe("Given getWordFromValues", () => {
  test("When VALUES array is given, then expected result should be given", () => {
    const VALUES = [1, 2, 3];
    const expectedResult = "123";

    const numbersWord = getWordFromValues(VALUES);

    expect(numbersWord).toBeDefined();
    expect(numbersWord).toEqual(expectedResult);
  });
});
