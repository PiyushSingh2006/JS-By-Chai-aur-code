const name = "Piyush"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Use back ticks
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('httc-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0, 3)
console.log(anotherString);

const newStringOne = "        Piyush           "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://piyush.com/piyush%10singh"
console.log(url.replace('%10', ' '));
console.log(url.includes("piyush"));

console.log(gameName.split("-"))


