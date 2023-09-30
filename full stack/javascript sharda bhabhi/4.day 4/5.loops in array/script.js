// loops with array
let fruits=["manogo","apple","banana","litchi","orange"]
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// odd number print--->
for(let i=1;i<fruits.length;i=i+2){
    console.log(i,fruits[i])
}

// even number print
for(let i=2;i<fruits.length;i=i+2){
    console.log(i,fruits[i])
}

// reverse print
for(let i=fruits.length;i>=0;i--){
    console.log(i,fruits[i])
}