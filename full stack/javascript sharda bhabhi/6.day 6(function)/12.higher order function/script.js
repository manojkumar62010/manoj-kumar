// Higher order Functions-:A function that does one or both
// 1.takes one or multiple functions as arguments 
// 2.return a functon

function multipleGreet(func,count){   //higher order function
    for(let i=0; i<=count; i++){
        func();
    }
}
let greet=function(){
    console.log("helo")
}
// multipleGreet(greet,1)
multipleGreet(function(){console.log("namste")},2)