/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

export const getWordFromValues = function (VALUES) {
  return VALUES.reduce((acc, value) => {
    return acc + value.toString();
  }, "");
};
