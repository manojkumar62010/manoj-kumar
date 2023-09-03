// javascript is dynamically type language

//  datatype are two type 
// 1. Primittive data type,2.non-primitive(reference) datatype
//1.> primitive data type has 7 type
//   I> string ,II> Number,III> boolean ,1V>null, V>undefined, VI>symbol, vii>bigInt
const score=100;
const scoreVAlue =100.3;

const isLoggedIn =false;
const outsideTemp =null;
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id===anotherId);

const bigNumber = 345578254654654n

// 2.>reference datatype
//   i> Array,ii>Objects,iii>function

const heros =["shaktiman","nagraj","doga"];
 let muObj = {
    name:"manoj",
    age :20,
}

 const myFunction=function(){
    console.log("manoj")
   
    
 }
 console.log(typeof heros)

