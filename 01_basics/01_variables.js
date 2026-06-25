const accountId = 1234;
let accountEmail = "Pss@gmail.com";
var accountPassword = "2468";
accountCity = "Jaipur";
let accountState;

// Never change const keyword variables
// Change let and const keywords but we only let because it uses in block scope
accountEmail = "Piyush@gmail.com";
accountPassword = "12345";
// Variables are not use without keywords 
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);