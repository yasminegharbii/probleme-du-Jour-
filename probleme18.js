/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
//1 create object to count occurences
//2 loop through each element in the array
//3 Increace the counter for that element
//4 loop through the array again and add condition "if" the count of the element is even return that element if no return "null"

var evenOccurrence = function (arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  console.log(counts);
  for (var i = 0; i < arr.length; i++) {
    if (counts[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};
