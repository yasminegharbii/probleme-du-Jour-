// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 *
 */

//1 Create an empty string called result
//2 Loop through each character in string1
// If the character is a space:
// Skip it
// 3 If string2 contains the character
// AND result does not already contain the character
//4   Add the character to result
// 5 If result is empty 
// 6  Return null
// 7 Return result

var commonCharacters = function (string1, string2) {
  var result = "";
  for (var i = 0; i < string1.length; i++) {
    var space = string1[i];
    if (space === " ") {
      continue;
    }
    if (string2.includes(space) && !result.includes(space)) {
      result += space;
    }
  }
  if (result === "") {
    return null;
  }
  return result;
};
