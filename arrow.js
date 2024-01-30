const user = 
{
    username: "hitesh",
    price: 900,
    welcomemessage: function() 
    {
        console.log(`${this.username} , welcome t webiste`);
        //console.log(this);
        //by adding this console log it give every deatils information of ever name we will add 
    }
}
/*user.welcomemessage()
user.username = "shru"
user.welcomemessage()*/
//this is not fix we cane change by using 13no. line code
console.log(this);
//bec of this it will show empty{}like this 


//this cannot be use in function thiss can work like this ...downside code 
function chai()
{
    let userName = "shruii"
    console.log(this.userName);
}
//if we add username (function) cannot work but not added username(function) then code will run and shows any values 


//all aut basic operation used in arrow
const addtwo = (numm1, num2) => {
    return num1 + num2
}
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shruiiie"}) 
console.log(addTwo(3,4))
