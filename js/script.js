
function Student(firstName, lastName, iD, fullYear, finalGrade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.iD = iD;
  this.fullYear = fullYear;
  this.finalGrade = finalGrade;
}

Student.prototype.getFirstName = function () {
  return this.fullName;
};
Student.prototype.getLastName = function () {
  return this.lastName;
};
var students = [];
var   student1 = {firstName:"John", lastName: "Appleseed",iD:"12345",fullYear :"Freshman", finalGrade: "F"};
    students.push(student1);
var student2 = {firstName:"Mary", lastName: "Shelly",iD:"98765",fullYear :"Sophmore", finalGrade: "A"};

    var fullName = [];
document.getElementById("action").addEventListener("click", function(){
  
   var s = prompt("Please enter the student's first name");
        var input = prompt("Please enter the student's Last name");
            input = prompt("Please enter the student ID number");
            input = prompt("Please enter studentyear(Freshman or Sophmore)"); 
   var s = "The following students are enrolled:<br/>";
       s += "<br />";
   for(var i = 0; i <fullName.length;i++){
       s += "The following students are enrolled" + (i + 1) + "<br />";
       s += fullName[i].getFirstName() + " <br />";
       s += "<ul>";
        s += "<li>" + fullName[i].getFirstName() + "</li>";
        s += "<li>" + fullName[i].getLastName() + "</li>";
        s += "<li>" + fullName[i].getiD() + "</li>";
        s += "<li>" + fullName[i].getfullYear() + "</li>";
        s += "<li>" + fullName[i].getfinalGrade() + "</li>";
       s +="</ul>";
       }
       document.writeRecords(students, "student-records").innerHTML = s;
});
