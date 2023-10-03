// Scope-:scope determines the accessibility of variable ,objects,and functions from deferent parts of the code.
// 1.function,2.block,3.lexical


let sum=54; //Global Scope

function calSum(a,b){
    let sum=a+b; //function scope
    console.log(sum);
}
calSum(5,6)
