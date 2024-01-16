import { extractVipsNames } from "./extractVipsNames";

describe("Given extractVipsNames", () => {
  test("When VIPS array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const VIPS = [
      { name: "Foo", age: 80 },
      { name: "Bar", age: 2 },
      { name: "Fizz", age: 5 },
      { name: "Buzz", age: 16 },
      { name: "FizzBuzz", age: 100 },
    ];
    const expectedResult = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    // Act
    const result = extractVipsNames(VIPS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });
});
