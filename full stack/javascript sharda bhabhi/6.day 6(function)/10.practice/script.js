// Q-:whta will be the output
 let greet ="hello"; //global function
function changeGreet(){
    let greet="namste"; //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); //  lexical scope
    }
}
console.log(greet);
changeGreet();