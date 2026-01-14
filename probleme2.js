// 1- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function Number(number) {
    if (number > 0) {
        return "positif";
    }
    else if (number <0) {
        return "négatif";
    } else {
        return "zero";
    }
}
Number(5);



// 2- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.

function AnotherNumber(number) {
    if (number / 3) {
        return "divisible par 3";
    }
    else if (number / 5) {
        return "divisible par 5";
    } else {
        return "autre";
    }
}
AnotherNumber(4);





// 3- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function TwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;}
TwoNumbers(7, 9);



// 4- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".

function Note(note) {
    return note >= 10 ? "réussi" : "échoué";
}
Note(19);