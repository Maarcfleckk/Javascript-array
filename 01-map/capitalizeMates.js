/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = function (mates) {
  return mates.map(
    (mate) => mate.charAt(0).toUpperCase() + mate.slice(1).toLowerCase()
  );
};