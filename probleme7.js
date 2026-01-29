
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.

function puissanceQuiAffiche(num, n) {
    for (var i = 1; i <= n; i++) {
        console.log(num ** i);
    }
}


// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.

function afficheDiviseurs(n) {
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
        
}

// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.

function afficheNombresImpaire(n) {
    for(var i = 1; i<= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}




// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.

function afficheMotInverse(text) {
    var motInverse = ""
    for(var i = text.length -1 i >= 0 i--)
        motInverse= motInverse + text
}
 