// singleton (Object constructor)
// object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Piyush",
    "full name": "Piyush Singh",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "piyush@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Sunday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "piyush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "piyush@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


