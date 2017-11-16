// Table
var alliance = ["elfe", "humain", "nain", "draeni", "gnome"];

var druide = ["nature", "vert", "mana", "agilité", alliance];
console.log(druide);

// objet
var mage = {
    nom : "Mage de Feu",
    talent: "feu"

};

console.log(druide[0]); // nature

// acceder à un tableau qui est dans un tableau
console.log(druide[4]);

// acceder à humain
console.log(druide[4][1]);


// Changer la valeur d'un objet
mage.nom = "Mage de glace";
console.log(mage);

// changer la valeur d'une propriete d'un tableau
druide[2] = "puissance";
console.log(druide);

var stats = ["attaque", "defense"];
console.log(stats);// avant le changement
stats[1] = "puissance";
console.log(stats);// modification de defense en puissance

