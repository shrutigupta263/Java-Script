let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER:",a);
    //here only inside value print 
}
console.log(a);
//here it print outside of loop value

//in function outside function(one) print inside(two) not because insider(two) is child & outsider(one) is parent   
function one(){
    const username = "abc"
    function two(){
        const website ="xyz"
        console.log(username);
    }
two()
    
}
one()

//now same in if else loop 
if (true){
    const username ="xyz"
    if(username === "xyz"){
        const website = " abx"
        console.log(username + website);
    }
    //this will not print bec it is not in inside of scope
    //console.log(website);
}
//and same goes to usernamne cnsole.log 

//function hosting how to decalre function pproperly 
console.log (addone(5));
function addone(num){
    return num +1
} 
//addtwo(5)
const addtwo = function(num){
    return num+2
}




