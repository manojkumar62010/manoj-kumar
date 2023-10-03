// Q-:Create a function that returns the sum of numbers from 1 to n.
function getSum(n){
    let sum=0;
    for (let i=0;i<=n;i++){
        sum=sum+i;

    }
    return sum;
}
console.log(getSum(1000))

// Q-:create a function that returns the concatenation of all strings in an array.
let str=["hi","hello","by","!"]

function concat(str){
    let result;

    for(let i=0;i<str.length;i++){
        result+=str[1];
    }
    return result;
}
console.log(concat(str))