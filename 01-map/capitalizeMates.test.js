import { capitalizeMates } from "./capitalizeMates.js";

describe("Given capitalizeMates", () => {
  test("When MATES array is provided as an argument. Then expected array should be returned", () => {
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedResult = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const mates = capitalizeMates(MATES);

    expect(mates).toBeDefined();
    expect(mates).toEqual(expectedResult);
  });
});
