// data types
//  var -->
var a = 32;
a = 31.32
console.log(a)
// let -->
function greetings(){
    let greet = "Hello Students";
    console.log(greet)
}
greetings()
// const -->
const myNUmber = 69;
console.log(myNUmber)


// Data Types
var isVerified = true;
var someValue = null;

// Arrays, Objects, strings, arrayofobjects
let myArray = [1,2,3,4,6]
let anotherArray = ["Batukchand", "Premchand", "rahimchand"]
console.log(myArray)
for(var number of myArray){
    console.log(number)
}
console.log(anotherArray)

const myObject = {
    name:"Ronit",
    batch:"5th Sem",
    age:20,
    designation:"Student"
}
for(var i in myObject){
    console.log(myObject[i])
}
const books = [
    {
        id:1,
        title:"Jungle me mangal",
        remarks:"Acha book hai",
        rating:4
    },
    {
        id:2,
        title:"Jungle me mangal",
        remarks:"Acha book hai",
        rating:4
    },
    {
        id:3,
        title:"Jungle me mangal",
        remarks:"Acha book hai",
        rating:4
    }
]
console.log(myObject.batch)
console.log(books[1].id)

// conditional Statements
// if-else
var cgpa = 6.9
if(cgpa>9){
    console.log("Beta, JW MArriot me treat");
}
else if(cgpa>8){
    console.log("Beta ok hai")
}
else if(cgpa>7){
    console.log("Beta is baar jaane de raha agli baar do well")
}
else{
    console.log('danda lao')
}

// Switch

const day = "tuesdayw"
switch (day){
    case  'Monday':
        console.log("Monday hai yaar TvT")
        break;
    case 'Friday':
        console.log("Ooo friday hai")
        break;
    default:
        console.log("Bhai aaj kaun sa din hai?")
}

// loops
//for loop 
for(var i =0;i<5;i++){
    console.log("Loop ho raha hai " + i)
}
// while loop
var count = 0;
while(count<5){
    console.log('count chal raha ' + count);
    count++
}
// do whike
var num = 3
do{
    console.log("Bhai ek baar to chalunga")
    num++;
}
while(num<5)