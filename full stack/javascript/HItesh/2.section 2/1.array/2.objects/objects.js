//  singleton   - when we make object by cunstructor than it made singleton
// Object.create

//object literals
const mySym =Symbol("key1")



const JsUser = {
    name:"manoj",
    "full name" : "manoj kumar",
    [mySym]: "mykey1",
    age:18,
    location : "bagodar",
    email :"manoj94@gmil.com",
    isLoggedIn: false,
    lastLooginDays:["monady","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "vikashmanoj@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="manoj100@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello manoj");

}
JsUser.greetingTwo = function(){
    console.log(`hello manoj ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());

// *******************************
// how create object by the help of constructor
// singleton
//const tinderUser = new Object() // singleton object
const tinderUser ={}   // non-singleton object


tinderUser.id ="123abc"
tinderUser.name ="manoj"
tinderUser.isLoggedIn = false;
console.log(tinderUser)

const regularUser = {
    email:"manoj100@gmail.com",
    fullname:{
        userfullname:{
            firstname: "manoj",
            lastname:"kumar"
        }
    }
}
console.log(regularUser.fullname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={ 3:"a",4:"b"}
const obj4 ={ 5:"a",6:"b"}

//  const obj3 ={ obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2}
 console.log(obj3) 

 const user =[
    {
    id:1,
    email:"manoj100@gmail.com"
 },
 {
    id:1,
    email:"manoj100@gmail.com"
 },
 {

 },
]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedin'))
