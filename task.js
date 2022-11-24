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
result()//Pavan Kumar from Hyd country is India
  