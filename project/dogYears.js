 // Creation d'une variable egal a mon age
let myAge = 33;
let earlyYears = 2;

// je multiplie earlyYears par 10.5
earlyYears = earlyYears * 10.5;
//console.log(earlyYears);

// Creation d'une variable qui enleve 2 a mon age
let laterYears = myAge - 2;
//console.log(laterYears);
//console.log(myAge);

laterYears = laterYears * 4;
//console.log(laterYears);

// creation de la variable myAgeInDogYears, on lui ajoute earlyYears + laterYears
// Mon age en "age chien"
let myAgeInDogYears = earlyYears + laterYears;
//console.log(myAgeInDogYears);

// Creation variable myName puis methode pour retourner myName en miniscule
let myName = "LYSDORA";
myName = myName.toLowerCase();
//console.log(myName);

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
