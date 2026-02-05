// 1 - Écrire une fonction qui prend un tableau de chaînes et retourne un tableau contenant la longueur de chaque chaîne.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function Length(string) {
  var result = [];

  each(string, function (ch) {
    result.push(ch.length);
  });
  return result;
}

// 2 - Écrire une fonction qui prend un tableau de chaînes et une lettre, et retourne un tableau contenant uniquement les chaînes qui contiennent cette lettre.

function OneLettre(string, letter) {
  var result = [];

  each(string, function (ch) {
    if (ch.indexOf(letter) !== -1) {
      result.push(ch);
    }
  });
  return result;
}

// 3 -Écrire une fonction qui prend un tableau d’objets représentant des étudiants et retourne un tableau ne contenant que les noms.

function nomEtudiants(etudiants) {
  var result = [];

  each(etudiants, function (etud) {
    result.push;
  });
  return result;
}

//4-Écrire une fonction qui prend un tableau de tableaux de nombres et retourne la somme de tous les nombres.

