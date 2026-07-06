const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const allnew_heros = [...marvel_heros, ...dc_heros]
console.log(allnew_heros);

const another_array = [1, 2, 3, [4, 5], [6, [7, 8]]]
another_array.flat(Infinity)
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"})); //interesting case for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



