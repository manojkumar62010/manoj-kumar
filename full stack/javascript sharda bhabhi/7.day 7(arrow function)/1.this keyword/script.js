// This keyword-: "this" keyword refers to an object that is executing the current piece of code
const student={
    name:"manoj",
    age:15,
    eng:56,
    math:100,
    phy:67,
    getAvg(){ //method
        let avg=(this.eng + this.math + this.phy)/3
        console.log(avg)
    }

}
// Try and catch -: The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed ,if an error occurs in the  try block.
console.log("helo")
// let a=5;
try{
    console.log(a);
}
catch{
console.log("caught an error ... a is not defined")

}
console.log("manoj")