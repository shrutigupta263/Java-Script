//stack= primitive heap= non-primitive//
//giving value their name or value  
let myYoutube ="shruti"
let anothername = myYoutube
anothername = "gupta"
console.log(anothername);
console.log(myYoutube);
//stores more information in one//
let userOne = {
    email: "shruti@gmiail.com",
    upi: "shruti@ybl"
}
let userTwo = userOne
userTwo.email = "shruti@google"

console.log(userOne.email);
console.log(userTwo.email);



