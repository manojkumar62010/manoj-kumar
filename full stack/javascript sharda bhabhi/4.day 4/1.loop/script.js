// loops-: Used to iterate(to repeat) a piece of code
// for loop-: for(initialisation;condition;updation){
//          //do somthing
// }
// for (let i=1;i<5;i++){
    // console.log(i)
// }
let i=10;
for(i=0;i<10;i++){
    console.log(i)
}
console.log(i)

// dry run means copy pen practice


// print all odd number
let j=20;
for( j=1;j<20;j=j+2){
    console.log(j)
}
// reverse
for(let i=15;i>=1;i=i-1){
    console.log(i)
}

// even number
for(let i=2;i<=20;i=i+2){
    console.log(i)
}
// reverse even number
for(let i=20;i>=2;i=i-2){
    console.log(i)
}

// Infinite loop
// for(let i=1;1>=0;i++){
//     console.log(i)
// }

//  multiplication
for(let i=5;i<=50;i=i+5) //multiplication of 5
{
    console.log(i)
}

let n=prompt("write your number")
n=parseInt(n)
for(let i=n;i<=n*10;i=i+n){
    console.log(i)
}

// nested loop
for(let i=1;i<=3;i++){
    console.log(`outerloop ${i}`)
    for(let j=1;j<=6;j++){
        console.log(j)
    }
}

