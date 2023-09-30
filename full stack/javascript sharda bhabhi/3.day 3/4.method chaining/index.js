// method chaning-: Using one method after another .Order of Execution will be left to right.

// str.toUpperCase().trim()

let str ="    hello"
// let nerStr=str.trim();
// console.log( "after trim",nerStr);
// nerStr=nerStr.toUpperCase();
// console.log( "after uppercase",nerStr)

let nerStr=str.trim().toUpperCase();
console.log(nerStr)
