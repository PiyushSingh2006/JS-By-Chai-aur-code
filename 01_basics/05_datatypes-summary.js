// Primitive

// 7 types: Number, Boolean, String, NULL, Undefined, Symbol, bigint

const score = 100
const bigInt = 99999999999999999

const id = Symbol("123")
const anotherId = Symbol("123")
// Symbol datatypes are unique

console.log(id === anotherId)


// Reference(Non-Primitive)

// Arrays, Objects, Functions

const heroes = ["Ironman", "SpiderMan", "Hulk"]
let myObj = {
    name: "Piyush", 
    age: 20
}

const myFunction = function(){
    console.log("Hello World")
}
// To check the datatype of variables
console.log(typeof id)
console.log(typeof score)
console.log(typeof bigInt)