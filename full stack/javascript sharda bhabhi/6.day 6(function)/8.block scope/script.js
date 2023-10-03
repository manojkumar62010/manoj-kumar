// block scope-: variable declared inside a{} block cannot be accessed from outside the block
// 
// {
//     let a=20;  //block scope i.e is is not assesable in outside the braces

// }
// console.log(a)

for(let i=0; i<=5; i++){
    console.log(i) //block scope
}