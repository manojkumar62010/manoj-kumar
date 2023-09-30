//  for of loop
// it is used for elemetnt of collection
// for(collection of element){do somthing}
let fruits=["mango","banna","litchi","pineapple"];
for(fruit of fruits){
    console.log(fruit)
}

for(fullName of "manojkumarmahato"){
    console.log(fullName)
}


// nested for of loop
let heros=[["manoj","kumar","mahto"],["spiderman","flasgh","wonder wommen"]];
for(list of heros){
    for(name of list){
        console.log(name)
    }
    console.log(list)
}