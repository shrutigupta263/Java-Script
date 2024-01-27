function saymyname(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("u");
}
saymyname()

function addtwonumbers(number1, number2){
    console.log(number1+number2);
    //after this comment return value is 8 not undefined 
    let result = number1 + number2
    return result
    //there also another way to return value 
    return number1 + number2
}

const result = addtwonumbers(3,5)
console.log("Result: ", result);


