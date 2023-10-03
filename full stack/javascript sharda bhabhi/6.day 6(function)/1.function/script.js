// functions-:block of code which perform for any work
// Function definition (telling js)
// function funName(){//do somethinf}
// function calling (using the function)
// funName();   hello();
function hello(){
    console.log("hello");
}
hello();

function printName(){
    console.log("manoj")
    console.log("kumar")
}
printName();

function print1to5(){
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
print1to5();    

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult")
    }
    else{
        console.log("not addult")
    }
}
// age=prompt("enter your age")
isAdult();