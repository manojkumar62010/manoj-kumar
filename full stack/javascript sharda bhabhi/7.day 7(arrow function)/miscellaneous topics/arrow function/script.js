const sum=(a,b)=>{
    console.log(a+b);
}
const cube =(n)=>{
    return n*n*n;
}
const pow=(a,b) =>{
    return a**b;
}

// implicit return
const mul = (a,b)=> a*b;



// Set Time0ut
// setTimeout(function,timeout)

setTimeout(()=>{
    console.log("manoj")
},1000);
console.log("kumar")

// set interval
// setInterval(function,timeout)

// setInterval(()=>{
//     console.log("manoj")
// },2000)


 let id=setInterval(()=>{
    console.log("manoj")
},2000);
console.log(id);

let id1=setInterval(()=>{
    console.log("kumar")
},2000);
console.log(id1);

// this with arrow functions

// Arrow -> i> Lesical scope  i.e parent-> call scope
// function->scope-> this->calling object

const student ={
    name:"manoj",
    marks:95,
    prop:this, // global scope
    getName :function(){
        console.log(this)
        return this.name;
    },
}