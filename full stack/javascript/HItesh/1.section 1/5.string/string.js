// 2 type of data type   1. premitive and 2.non premitive data type


// now we to know ,how the memory work
//  where the 1) stack(primitive) use. 2) Heap (non primitive)
 
let yourYoutubename = "manojkumar"


let anothername = yourYoutubename;
 anothername ="unique channel"

console.log(anothername)
console.log(anothername)

let userOne ={
    email: "manojmahuri100@gmail.com",
    upi: "user@ybl"

}


let userTwo = userOne
userTwo.email ="vikashmanojpro@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);