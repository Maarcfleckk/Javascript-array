import { getLongWords } from "./getLongWords.js";

describe("Given getLongWords", () => {
  test('When LANGUAGES array is provided as argument. Then expected array should be returned', () => {
    //Arrange
      const Languages = ["Java", "C++", "JavaScript", "C#", "TypeScript"]; 
      const expectedResult = ['JavaScript', 'TypeScript']
    //Act
      const longLanguages = getLongWords(Languages);
    //Assert
      expect(longLanguages).toBeDefined();
      expect(longLanguages).toEqual(expectedResult);
  });
});
