/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = function (mates) {
  return mates.map(function (mate) {
    const firstLetter = mate.charAt(0).toUpperCase();

    const restOfName = mate.slice(1).toLowerCase();

    const capitalizedMate = firstLetter + restOfName;

    return capitalizedMate;
  });
};
