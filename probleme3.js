
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18

function Hour(heure) {
    return hour <= 12 ? "matin" : hour <= 18 ? "après midi" : "soir";
}
Hour(9);


// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon

function Score(score) {
    return score >= 90 ? "excellent" : score >= 70 ? "bon" : score >= 50 ? "moyen" : "faible";
}


// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

**sans utiliser Math.min**


function SmallNumber(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    }
}
SmallNumber(3, 7, 1);
  
