//singleton
const mSym = Symbol("key1")
const JsUser = {
    name: "Shruti",
    "full name": "Shruti gupta",
    //[mySym]: "mykey1",
    age:20,
    location:"PUne",
    email: "shrutigupta@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
} 
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])



JsUser.email="shrutiguta@gmail.com"
Object.freeze(JsUser)
JsUser.email="shruti123@gmail.com"
console.log(JsUser);
