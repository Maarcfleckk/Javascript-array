/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

export const extractCountriesWithFiveCharactersOrFewer = function (words) {
  const shortWords = words.filter((word) => {
    return word.length <= 5;
  });

  return shortWords;
};
