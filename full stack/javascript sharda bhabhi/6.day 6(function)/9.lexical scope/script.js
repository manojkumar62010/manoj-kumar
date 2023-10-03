// Lexical scope-: a variable defined outside a function can be accessible inside another function defined after the variable declaration
// The opposite is note true

function outerFunction(){
    let x=5;
    let y=6;
    function ineerFunction(){
        console.log(x);
        console.log(y);
    }
    
ineerFunction()
}