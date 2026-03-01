// Une liste de livres orientée objet !

// Créer une classe ListeDeLivres  
// Créer une autre classe appelée Livre  

// Les listes de livres doivent avoir les propriétés suivantes :
// - Nombre de livres marqués comme lus  
// - Nombre de livres marqués comme non lus  
// - Une référence vers le prochain livre à lire (objet Livre)  
// - Une référence vers le livre en cours de lecture (objet Livre)  
// - Une référence vers le dernier livre lu (objet Livre)  
// - Un tableau contenant tous les livres  

// Chaque Livre doit avoir plusieurs propriétés :
// - Titre  
// - Genre  
// - Auteur  
// - Lu (true ou false)  
// - Date de lecture : peut être vide, sinon doit être un objet JS Date()  
function Livre(titre, genre, auteur) {
    this.titre = titre
    this.genre = genre 
    this.auteur = auteur
    this.lu = false
    this.DateDeLecture = null
}
// Chaque ListeDeLivres doit avoir quelques méthodes :
function ListeDeLivres() {
  this.nombreLus = 0;          
  this.nombreNonLus = 0;       
  this.prochainLivre = null;    
  this.livreEnCours = null;     
  this.dernierLivreLu = null; 
  this.livres = [];       
  
  
}

// .ajouter(livre)  
 this.ajouter = function(livre) {
    this.livres.push(livre);      
    this.nombreNonLus++;          
    if (this.livreEnCours) {      
      this.livreEnCours = livre;   
    }
    if (!this.prochainLivre) {    
      this.prochainLivre = livre;  
      
    }
  };
// → doit ajouter un livre à la liste des livres.

// .terminerLivreCourant()  
// → doit marquer le livre en cours de lecture comme "lu"  
// → lui donner une date de lecture avec new Date(Date.now())  
// → changer le dernier livre lu pour être le livre qui vient d’être terminé  
// → changer le livre en cours pour être le prochain livre à lire  
// → changer la propriété "prochain livre à lire" pour être le premier livre non lu trouvé dans la liste des livres  

