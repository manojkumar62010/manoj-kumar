// return-:return keyword is used to return some value from the function
// input----->function------>output
// function funName(arg1 arg2...){//do something return val}

function addition(a,b){
    console.log("helo")
    console.log("helo")
    return a+b;
    console.log("helo")// after return keyword doesnt work anything 
    console.log("helo")

}

console.log(addition(addition(3,5),6))


function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult"
    }
}
console.log(isAdult(10))