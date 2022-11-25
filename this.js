'use strict';
//this inside a global scope
this.student="Sachin Tendulkar";
this.teamIndia={
  student:"virat Kohli",
}
//this.teamIndia.party();//here this refers to this.teaminda object
//console.log(this.student)//Sachin Tendulkar
//console.log(this.teamIndia.student)//virat Kohli

//this Inside an object
let teambangalore={
  student:"AB Devilliers",
}
//console.log(this.teambangalore);//undefined
//console.log(teambangalore.student)//AB Devilliers

//this Inside an method;
//teambangalore.party()//AB Devilliers and we had a party

//this inside a function
/*
const party=function(){
    console.log(`${this.student} and cricket legends had a party`);
}*/
//this inside nested inner function
/*
const party=function(){
    let thisobj=this;
    const innerfunction=function(){
        console.log(`${thisobj.student} and cricket legends had a party`);
    }
    innerfunction();
}*/
//arrow function soln for inner function
const party=function(){
    const innerfunction=()=>{
        console.log(`${this.student} and cricket legends had a party`);
    }
    innerfunction();
}
//party();//Sachin Tendulkar and cricket legends had a party
//but if you use 'use strict' it cannot work this is not a good practice;

//call function
party.call(this); //Sachin Tendulkar and cricket legends had a party
party.call(this.teamIndia);//virat Kohli and cricket legends had a party
party.call(teambangalore);//AB Devilliers and cricket legends had a party

//this inside a constructor
let team=function(student){
    this.student=`${student} and had a prty`
}
const india=new team('virat');
console.log(india);
