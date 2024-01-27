 const myArr = [0,1,2,3,4,5]
 const myHeros = ["shaktiman", "naagraj"]
 const myArr2 = new Array(1,2,3,4)
 console.log(myArr[2]); //print no. given in no.

//methods of array 
 myArr.push(6) // add no. in array at last 
 console.log(myArr);
 myArr.pop() ///remove (added)last no. of array 
 console.log(myArr);

 myArr.unshift(9) //add no. but in first 
 console.log(myArr);
 myArr.shift() //remove added no.
 console.log(myArr);

 //tells position of no. given in array and here if no is not present then it directly tells false 
 console.log(myArr.includes(9)); //postion of no given 
 console.log(myArr.indexOf(3)); 

//its all about that newArr is print in string from not in array like ([])
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);


//slice, splice
console.log("A", myArr);
const myn1 =myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.slice(1,3)
console.log("C",myArr);
console.log(myn2);

