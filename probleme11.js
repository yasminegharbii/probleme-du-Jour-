// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.

function removeByIndex(tableau, index) {
  var newt = [];
  for (var i = 0; i < tableau.length; ) {
    if (i !== index) {
      newt.push(tableau[i]);
    }
  }
  return newt;
}

// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.

function pick(objet,keys) {

}

//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.

function mostFrequent(tab) {
  
}

