// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const secondName = getInput(2);

console.log("Hello " + firstName + " " + secondName + ", Welcome to my first node app");
const capitilisedName = firstName.toUpperCase() + " " + secondName.toUpperCase()
console.log("Hey " + capitilisedName + "! " + "This is node App which takes your full name as input and capitilized your name :D");

const nameInitials = capitilisedName[0] + " " + capitilisedName[capitilisedName.indexOf(" ") + 1];
console.log("These are the initials of your name " + nameInitials);
console.log("You code immersive email ID is: " + firstName.toLowerCase() + "." + secondName.toLowerCase() + "@codeimmersives.com");
