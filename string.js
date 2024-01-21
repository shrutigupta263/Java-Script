const name = "shruti"
const repocount = 20
//here name + repocount means printing there value in "" value written will print ...... this is old method to print there valuee 
//console.log(name + repocount + "gupta") 
console.log(`hello my name is ${name}  and my repocount is ${repocount}`);

const gameName = new String("shruti") 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //length of string start from 0
console.log(gameName.toUpperCase()); //convert everyin upper 
console.log(gameName.charAt(2)); //alphabet place
console.log(gameName.indexOf('t')); //no. place

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 2) // here how many alha matter 
console.log(anotherString);
const newStringOne = "  shruti  " //spaces given in string 
console.log(newStringOne);
console.log(newStringOne.trim());//remove space we have given here 


const url = "https://shruti.com?shruti30@gupta"
console.log (url.replace('30','-')) //it repacle 30 into - 
console.log(url.includes('shruti')) //checking that shruti is there or nt in url 
console.log(url.includes('abc'))

//more features in string 


