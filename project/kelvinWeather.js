//let kelvin = 294;
const kelvin = prompt('What is the Kelvin temperature today');
let celsius = kelvin - 273.15;

console.log(kelvin);
console.log(celsius);

// La formule est de multiplier le celsius par 1.8000 ou 9/5 puis ajouter 32
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

//Grace a Math.floor, j'arrondi  l'entier inferieur ou gal  la valeur
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
