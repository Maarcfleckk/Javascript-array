import { capitalizeMates } from "./capitalizeMates";

describe("Given capitalizeMates", () => {
  test("When MATES array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedResult = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    // Act
    const result = capitalizeMates(MATES);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });
});
