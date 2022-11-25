class student{
    static count=0;
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
        student.count++
    }
    isPass(){
        if(this.marks>=40){
           console.log(`${this.name} has passed`);
        }else{
            console.log(`${this.name} is failed`);
        }
    };  
   numberofusers(){
    console.log(student.count);
   }
   isEligible(){
     return ()=>{
        if(this.marks>=40 && this.age>24){
            console.log(`${this.name} has ${this.marks} and ${this.age} so he is eligible`)
        }else{
            console.log(`${this.name} is not eligible`)
        }
     }
   }
}
let s1=new student('pavan',28,8979888789,45);
let s2=new student("hitesh",28,45645778,32);
s1.isEligible()();
s2.isEligible()();