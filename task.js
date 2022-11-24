//Call 
let student1={
    firstname:"Pavan",
    lastName:"Kumar",
  }
   let fullName=function (hometown,state){
      console.log(this.firstname+" "+this.lastName+" from "+hometown+" country is "+state);
    }
  let student2={
    firstname:"Dani",
    lastName:"Daniels"
  }
  //borrowing function from name object
  fullName.call(student1,"Hyderabad","india");

  //Apply
  fullName.apply(student1,["Hyd","India"])//Pavan Kumar from Hyd country is India
  let result=fullName.bind(student1,"Hyd","India")//Pavan Kumar from Hyd country is India
console.log(result)//[Function: bound fullName];
result()//Pavan Kumar from Hyd country is India;

//currying
/*function multiply(x,y){
  console.log(x*y)
}
let multiplybytwo=multiply.bind(this,3);
multiplybytwo(2)

let multiplybyfive=multiply.bind(this,3);
multiplybyfive(5)*/
/*Another way of currying (closures)
let multiply=function (x){
    return function (y){
      console.log(x*y)
    }
}
let func1=multiply(2)
func1(3)
//output is 6
  */