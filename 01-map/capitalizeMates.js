/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = function (mates) {
  const capitalizedMates = [];

  for (let i = 0; i < mates.length; i++) {
    const capitalizedName =
      mates[i].charAt(0).toUpperCase() + mates[i].slice(1).toLowerCase();
    capitalizedMates.push(capitalizedName);
  }

  return capitalizedMates;
};