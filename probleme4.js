// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function TwoNumbers(num1, num2) {
    if (num1===num2) {
        return "égaux" ;
    } else {
        return "diffèrents";
    }
    
}
// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false

function Empty(string) {
    return string === "";
}

// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90

function Vitesse(speed) {
    if (speed < 30) {
        return "lent";
    } else if (speed <= 90) {
        return "normal";
    } else {
        return "rapide";
    }
}

// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps


function Numbers(num) {

}