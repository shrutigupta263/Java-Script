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

function loginusermessage(username = "sam"){
    if(!username){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginusermessage(""))
//here in result it diffine undifiined so now udate that just rint lease sentence 
//if no name is print in consle then it will print please 




/// remainn this toic of function 
