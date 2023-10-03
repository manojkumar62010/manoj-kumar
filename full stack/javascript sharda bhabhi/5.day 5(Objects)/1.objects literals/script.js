// JS Object literals-: used to store collection & complex entites.
                    // property=>(key,value)pair
                    // objects are a collection of properties
                 const student ={  //In object always define in const
                    name:"manoj",
                    age:20,
                    degignation:"engineer",
                    roll:"SDE"
                 }  ;
                 console.log(student.roll) 

// get value by the help of object
let students={
    name:"mano",
    age:20
}
console.log(students.name)

// conversion-: js automatically converts objects keys to strings.
//    Even if we the number as a key,the number will be converted to string.
let obj={
   1:"one",
   true:"c",
   null:"khali h bhai",
   undefine:"define nhi h yrr"
};
console.log(obj)

// ---Add or update  value
// 1.change the city to "Mumbai",2.Add a new propery,gender:"female",3.change the marks to "A".
const student1={
name:"manoj",
age:20,
marks:94.4,
city:"delhi"
};
console.log(student1);
student1.city="mumbai";
student1.marks="A"
delete student1.age;
console.log(student1)

// Object of Object  or Nested objects-:Storing information of multiple students
const classInfo={
   manoj:{
      grade:"A+",
      city:"Gridih"
   },
   kumar:{
      grade:"A",
      city:"HZB"
   },
   mahto:{
      grade:"O",
      city:"Ranchi"
   }
}
console.log(classInfo.mahto);
classInfo.mahto.city="jamuniya";
console.log(classInfo.mahto)

// Array of Object-:Storing  information of multiple students
const infoClass=[
  {
   name: "manoj",
   grade:"A+",
   city:"maharastra"
  },
  {
   name: "kumar",
   grade:"A",
   city:"saurastra"
  },
  {
   name: "mato",
   grade:"O",
   city:"chenai"
  }
]
console.log(infoClass);
console.log(infoClass[1].city);
infoClass[1].city="mumbai";
console.log(infoClass)
