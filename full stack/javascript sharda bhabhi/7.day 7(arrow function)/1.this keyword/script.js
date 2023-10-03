// This keyword-: "this" keyword refers to an object that is executing the current piece of code
const student={
    name:"manoj",
    age:15,
    eng:56,
    math:100,
    phy:67,
    getAvg(){
        let avg=(this.eng + this.math + this.phy)/3
        console.log(avg)
    }

}