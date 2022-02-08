const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number"));

if (num <= 16){
console.log("you cannot drive");
}
else if (num == 17){console.log("you can drive but cannot vote");}

else if (num == 18){console.log("you can vote but you cannot rent a car")}

else if (num == 19){console.log("you can vot but you cannot rent a car");}

else if (num == 20){console.log("you can vote but you cannot rent a car");}
else if (num == 21){console.log("you can vote but you cannot rent a car");}
else if (num == 22){console.log("you can vote but you cannot rent a car");}
else if (num == 23){console.log("you can vote but you cannot rent a car");}
else if (num == 24){console.log("you can vote but you cannot rent a car");}


else if(num >= 25)
{console.log ("you can pretty much do anything");}

else{console.log("you can pretty much do any thing");}