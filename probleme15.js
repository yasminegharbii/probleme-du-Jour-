// J’ai un seau de paresseux. Chaque paresseux est spécial et possède un nom long.
// Ci-dessous se trouve un tableau appelé seauDeParesseux, contenant toutes les informations sur mes paresseux.
var seauDeParesseux = [
  {
    nom: {
      prenom: "Poilu",
      deuxiemePrenom: "Dangereux",
      nomDeFamille: "Assassin",
    },
    age: 2,
  },
  { nom: { prenom: "Lent", nomDeFamille: "Citrouille" }, age: 3 },
  {
    nom: {
      prenom: "Balle",
      deuxiemePrenom: "Blindé",
      nomDeFamille: "Paresseux",
    },
    age: 4,
  },
  {
    nom: { prenom: "Bisou", deuxiemePrenom: "Bisou", nomDeFamille: "Chignon" },
    age: 5,
  },
  { nom: { prenom: "Jungle", nomDeFamille: "Duveteux" }, age: 2 },
];

// a- écrire une fonction fullName qui prend en entrée un index et un tableau
// et retourne le nom complet sous forme de chaîne de caractères
// nomComplet(seauDeParesseux,0) //==> "Poilu Dangereux Assassin"
function nomComplet(tableau, position) {
  var people = tableau[position].nom;
  return (
    people.prenom + " " + people.deuxiemePrenom + " " + people.nomDeFamille
  );
}

// b- écrire une fonction qui prend un tableau d’objets (comme seauDeParesseux)
// et retourne le paresseux (doit retourner un objet)
// qui possède le nom le plus long (prénom, deuxième prénom & nom).
// Remarque : il peut être utile d’utiliser la fonction nomComplet,
// plusLongNom(seauDeParesseux);
// => { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 }
function plusLongNom(seauDeParesseux) {
  var plusLong = "";
}

// - créer un modèle de données pour représenter vos camarades de classe
// - réfléchir aux différents attributs de vos camarades : qu’ont-ils tous en commun ?
// - créer une fonction factory (fonction d'usine).
function creerCamarades(nom, prenom, age, sexe) {
  return {
    nom: nom,
    prenom: prenom,
    age: age,
    sexe: sexe
  };
}
// - créer un tableau pour contenir les camarades que vous avez créés.
var camarades = [
creerCamarades("yas" , "jaz" , "50" , "M"),
creerCamarades("kuromi" , "friends" , "111" , "F")
];
// - écrire une fonction appelée afficherAmi qui prend un camarade en argument
//   et retourne les informations importantes de manière lisible.
function afficherAmi(camarade) {
  return camarade.prenom + " " + camarade.nom + " - age: " + camarade.age;
}
// - écrire une fonction appelée ajouterAmi qui prend un camarade en argument
//   et l’ajoute au tableau camarades.
function ajouterAmi(camarade) {
  camarades.push(camarade);
}
// - calculer le nombre d’amis masculins que contient votre classe
//   en écrivant une fonction appelée nombredeMale.
 function nombreMale (camarades) {

      var count = 0
      for(var i = 0; i < camarades.length; i++) {
        if (camarades[i].sexe === "M") {
          count++
        }
      }
      return count
    }
// - écrire une fonction recherche qui, étant donné une requête (query)
//   et un tableau de camarades ,
//   cherche dans le tableau des camarades un camarade « correspondant ».
