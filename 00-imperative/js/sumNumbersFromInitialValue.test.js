import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given sumNumbersFromInitialValue", () => {
  test("When NUMBERS array and initial number is 0. Then 15 should be returned", () => {
    // Arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialNumber = 0;
    const expectedResult = 15;

    // Act
    const number = sumNumbersFromInitialValue(NUMBERS, initialNumber);

    // Assert
    expect(number).toBeDefined();
    expect(number).toBe(expectedResult);
  });
  test("When NUMBERS array and initial number is 10. Then 25 should be returned", () => {
    // Arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialNumber = 10;
    const expectedResult = 25;

    // Act
    const number = sumNumbersFromInitialValue(NUMBERS, initialNumber);

    // Assert
    expect(number).toBeDefined();
    expect(number).toBe(expectedResult);
  });
});
