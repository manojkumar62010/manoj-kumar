const favMovie="Avtar";

let guess=prompt("Guess my favorate movie");

while((guess !=favMovie)&&(guess !="quit")){
    // console.log("wrong guess")
    guess=prompt(" wrong guess,pls try again");
}
if(guess==favMovie){
    console.log("congrats!!");
}
else{
    console.log("quit")
}
