// Object -: object is instance of class that define their properties or behavior
let rectangle ={
    length:1,
    breath:2,
     
    draw: function(){
        console.log('drawing rectangle');
    }
};
// console.log(rectangle) 

// object creation   1.factory function  2. constructor function

// factory function

function createRectangle(len,bre){
    return rectangle ={
        length:len,
        breath:bre,
         
        draw(){
            console.log('drawing rectangle');
        }
    };

}
let rectangleObj1 = createRectangle(4,5);
let rectangle2 = createRActangle(2,3);
// console.log(rectangleObj1)


// constructor creation  -> pascal Notation -> first letter always capital -> NumberOfStudent

// for current object we can define "this keyword" 


function Rectangle(){
    this.length =1;
    this.breath = 2;
    this.draw = function(){
        console.log('drawing');
    }
         
           
        }
    

