// With constructor
class Student{
   sId:number;
   sName:string;
   sMarks:number;
   constructor(Id:number, name:string, Markes:number){
       this.sId = Id;
       this.sName = name;
       this.sMarks = Markes;
   }
   Display(){
       console.log("Student ID:"+ this.sId, "Student Name:"+ this.sName, "Student Marks:" + this.sMarks);
   }

}

var obj = new Student(10, 'Digvijay Singh', 99);
obj.Display();

// Without constructor
class Stuent1{
    sId:number;
    sName:string;
    sMarks:number;
   /* constructor(Id:number, name:string, Markes:number){
        this.sId = Id;
        this.sName = name;
        this.sMarks = Markes;
    }*/
    Display(){
        console.log("Student ID:"+ this.sId, "Student Name:"+ this.sName, "Student Marks:" + this.sMarks);
    }
 
 }
 
 var obj1 = new Stuent1();
 obj1.sId = 10;
 obj1.sName = 'Digvijay Singh';
 obj1.sMarks = 70;
 obj1.Display();