// Q-: For the given start state of an array ,change it to final from using methods.
// start:['january','july','march','august']
// final:['july','june','march','august']

let start=["january","july","march","august"];
start.shift();
console.log(start)
start.shift();
console.log(start);
start.unshift("june")
console.log(start)
start.unshift("july")
console.log(start)


