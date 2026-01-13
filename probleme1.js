// 1-Créer une fonction qui combine ton prénom et ton nom et retourne le résultat avec un espace entre les deux.

function fullName(name, surname) {
    return name+" " + surname;
}
fullName("Yasmine", "Gharbi");








// 2-Écris une fonction qui prend deux nombres et retourne la moyenne.


function Moy(num1, num2) {
    return (num1 + num2) / 2;
}
Moy(10, 19);






// 3-Crée une fonction qui prend une chaîne de caractères et retourne le nombre de caractères qu'elle contient.

function stringLength(text) {
    return text.Length;
}
stringLength("Hello");






// 4-Crée une fonction qui retourne la sous-chaîne à partir d'une position donnée jusqu'à la fin.

function String(text, position) {
    return text.slice(position);
}
String("Hello Word", 5);







