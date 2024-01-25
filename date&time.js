let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());//onlyy date with week day
console.log(myDate.toLocaleString()); //date time week dayy

let mycreatedate = new Date(2023, 0, 23, 5, 3)
console.log(mycreatedate.toLocaleString());
 //formate of writting dates systematically month-date-year should be follow 
 let myCreateDate = new Date("01-1-2024")
 console.log (myCreateDate.toLocaleDateString());
 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreateDate.getTime());
 console.log (Math.floor(Date.now()/1000)); //to know in secnds and math word used with flor bec value should not be in decimale 


