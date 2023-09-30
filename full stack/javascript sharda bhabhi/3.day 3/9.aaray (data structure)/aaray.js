// array-: linear collection of things

// let student1="manoj"
// let student2="kumar"
// let student3="mahato"
let students=["manoj","kumar","mahato"];
console.log(students)


// Visualizing Array 
let nums=[2,3,4,6];
console.log(nums[0])
console.log(nums.length)
console.log(typeof(nums))

// different way to visulize an array;
let num1=[1,2,2,3,4,5]  // integer array
let str1=["manoj","kumar"] //string array
let numStr=["manoj",2,3.0]// mixed array
let eempty=[""]// empty array

//  Arrays are Mutable
let fruits=["apple","mango","pineapple"];
fruits[1]="banana"
fruits[10]="lichhi"
console.log(fruits)
console.log(fruits.length)

//  Array methods i> push-:add to end  ii>pop-:delet from end and return it
                    // iii>unshipt-: add to start iv>delete from start & returns it
// push--->
let myStr=["manoj","kimar","mahato"];
myStr.push("vikas","raj")
myStr.push("papa","tilak","mahto")
console.log(myStr)

// pop---> delete from end
myStr.pop()
console.log(myStr)

// unshift-> add from begining
myStr.unshift("suman")
console.log(myStr)

// shift--> delet from begining
myStr.shift()
console.log(myStr)


