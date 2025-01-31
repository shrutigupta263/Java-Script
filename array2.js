const marvel_heros = ["thor","ironmman", "spiderman" ]
const dc_heros = ["superman", "flash","batman"]
//marvel_heros.push(dc_heros) //it push array inside array full
//console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //proper method to put inside another array in another 


const another_array = [1,2,3,[4,5,6],,[8,9,[0]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//it make every array in proper one bracket only 

//here it slpit every letter in array element format
console.log(Array.isArray("Shruti"));
console.log(Array.from("Shruti"));
//lets take ex
//it print in all array formate like in[100,200,300]
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));