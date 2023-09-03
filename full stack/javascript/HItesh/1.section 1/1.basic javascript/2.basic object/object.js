// let lecture=5;
// let section=2;
//  let title='javascript';

//  const course={
//     lecture:5,
//     section:2,
//     title:'javascript',
//     notes:{
//         introduction:"welcome to js course"
//     },
//     enroll(){
//         console.log('you are sucessfully enrolled');
//     }
//     }
// course.enroll()
// console.log(course)
// course.price = 900


// factory function

function createCourse(title){
    return{
    lecture:5,
    section:2,
    title:'javascript',
    notes:{
        introduction:"welcome to js course"
    },
    enroll(){
        console.log('you are sucessfully enrolled');
    }
    }

}
const course=createCourse();
course.enroll()

 
