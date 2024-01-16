import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership";

describe("Given customersWhoBelongToMembership", () => {
  test("When CUSTOMERS array is provided as an argument. Then exepected array should be returned.", () => {
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    const expectedResult = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];

    const member = customersWhoBelongToMembership(CUSTOMERS)

    expect(member).toBeDefined();
    expect(member).toEqual(expectedResult);
  });
});
