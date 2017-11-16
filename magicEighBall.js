let userName = "Lysdora";
userName  ? console.log(`Hello,${userName}`) : console.log("Hello");

let userQuestion = "Que souhaite tu savoir ?";
//console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 7 ) + 1 ;
//console.log(randomNumber);

let eightBall = "";

switch(randomNumber) {
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
   eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
   eightBall = "Don't count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "lol";
    break;   
    
  }

console.log(userQuestion + " " + userName);
console.log(eightBall);
