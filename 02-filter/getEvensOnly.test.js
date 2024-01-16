import { getEvensOnly } from "./getEvensOnly.js";

describe("Given getEvensOnly", () => {
  test("When COUNTERS array is provided as an argument. Then expected array should be returned.", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const expectedResult = [2, 12, 42, 28];

    const number = getEvensOnly(COUNTERS);

    expect(number).toBeDefined();
    expect(number).toEqual(expectedResult);
  });
});
