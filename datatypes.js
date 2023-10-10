//primitive
// types are  7 
//string number boolean null undefined symbol bigint
const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp =  null
let userEmail;
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id ===anotherId);

//REFERENCE (NON PRIMITIVE)
// array, objects, function 
const heros = ["shaktiman", "bhaubali", "doga"];

let myobj = {
    name: "shruti",
    age: 21,
}

const myFunction = function(){
    console.log("shruti hello");
}

console.log(typeof heros);
