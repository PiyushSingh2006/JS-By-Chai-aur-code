// const tinderUser = new Object()
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Piyush"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    gmail: "piyush@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Piyush",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    }
]

console.log(user[1].id)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));


