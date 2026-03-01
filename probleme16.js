/* en utilisant les closures, créez une fonction appelée creerCafe qui possède les propriétés et méthodes suivantes :
 cafe : une propriété représentant le nombre de cafés que votre café peut servir.
 petitGateau : une propriété représentant le nombre de petits gâteaux que votre café peut servir.

 Créez une fonction interne servirClient qui sert du café et des petits gâteaux au nombre de clients passé en paramètre.
*/
function creerCafe(Cafe, Gateau) {
  return function servirClient(Clients) {
    if (Gateau <= 0) {
      return "Nous n'avons plus de petits gâteaux";
    }
    var serve = Clients;
    if (serve > Cafe) {
      serve = Cafe;
    }
    if (serve > Gateau) {
      serve = Gateau;
    }

    Cafe = Cafe - serve;
    Gateau = Gateau - serve;
    return (
      "Nous avons servi " +
      serve +
      " clients et il reste" +
      Cafe +
      "cafés et " +
      Gateau +
      "petits gateaux"
    );
  };
}
// Exemple :
// var starBucks = creerCafe(20,15);
// starBucks(5)  => "Nous avons servi 5 clients et il reste 15 cafés et 10 petits gâteaux"
// starBucks(10) => "Nous avons servi 10 clients et il reste 5 cafés et 0 petits gâteaux"
// starBucks(3)  => "Nous n'avons plus de petits gâteaux"
