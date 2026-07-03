// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createdDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("2024-01-23")
console.log(createdDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})




