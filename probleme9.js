// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.*

function PairsTab(t) {
    var i = 0;
    var pair = 0;
    while (i < t.length) {
        if (t[i] % 2 === 0) pair++;
    }
    i++;
    return pair;
}

// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.

function InverseElements(t) {

    var newt = [];
    for (var i = t.length - 1; i >= 0; i--) {
        newt.push(t.[i])
    }
    return newt
}

// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.

function NombresImpairs(tableau){
    var i = 0
    var newt = []
    while(i < tableau.length) {
        if (tableau[i] % 2 === 1) {
            newt.push(tableau[i])
        }
        i++
    }
    return newt
}

// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.
function PositiveEl(tableau){

var counter = 0
var i = 0
while (i < tableau.length) {
    if (tableau[i] > 0) {
        counter++
    }
    i++
}
return counter
}

// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.
