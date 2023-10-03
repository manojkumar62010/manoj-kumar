// methods-:Actions that can be performed on an objects.
const calculator={
    num:55,
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    },
    multiply:function(a,b){
        return a*b
    }
};
console.log(calculator.add(5,9))
console.log(calculator.sub(5,9))
console.log(calculator.multiply(5,9))

// Methods(shorthand)
const calculator1 ={
    add(a,b){
return a+b
    },
    sub(a,b){
        return a-b
            },
};