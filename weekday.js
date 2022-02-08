const prompt = require("prompt-sync")();
let num = Number(prompt("weekday"));

if (num == 1){console.log("monday");}
else if (num == 2){console.log("tuesday");}
else if (num == 3){console.log("wensday");}
else if (num == 4){console.log("thursday");}
else if (num == 5){console.log("friday");}
else if (num == 6){console.log("saterday");}
else if (num == 7){console.log("sunday");}
else{console.log("error");}