// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.

function Nombres(num) {
    return num % 2 === 0
}


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for

function InverseS(string) {
    var results = ""
    for (var i = string.length - 1; i >= 0; i--) {
        results += string[i]
    }
    return results
}



// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer

function Delete(tableau) {
    return tableau.pop()
}



// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer

function premierelement(tableau) {
    return tableau.shift()
}


// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while

function Firstnumber() {

    var num = 1
    while (num <= 50) {
        if (num % 3 === 0 && num % 5 === 0) {
            return num
        }
        num++
    }
}