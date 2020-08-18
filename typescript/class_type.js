// With constructor
var Student = /** @class */ (function () {
    function Student(Id, name, Markes) {
        this.sId = Id;
        this.sName = name;
        this.sMarks = Markes;
    }
    Student.prototype.Display = function () {
        console.log("Student ID:" + this.sId, "Student Name:" + this.sName, "Student Marks:" + this.sMarks);
    };
    return Student;
}());
var obj = new Student(10, 'Digvijay Singh', 99);
obj.Display();
// Without constructor
var Stuent1 = /** @class */ (function () {
    function Stuent1() {
    }
    /* constructor(Id:number, name:string, Markes:number){
         this.sId = Id;
         this.sName = name;
         this.sMarks = Markes;
     }*/
    Stuent1.prototype.Display = function () {
        console.log("Student ID:" + this.sId, "Student Name:" + this.sName, "Student Marks:" + this.sMarks);
    };
    return Stuent1;
}());
var obj1 = new Stuent1();
obj1.sId = 10;
obj1.sName = 'Digvijay Singh';
obj1.sMarks = 70;
obj1.Display();
