const myModule = require('./WooDeLiang_schoolManagement.js'); 

myModule.displayStudents(myModule.students);
myModule.addNewStudent({ id: "4", names: "Sara", classes: "L3" });
myModule.addNewStudent({ id: "5", names: "Zack", classes: "L4" });
myModule.displayStudents(myModule.students);
myModule.updateStudentByid("2", { names: "jonathan"});

myModule.deleteStudent("1")

 myModule.deleteStudentByName("Alex");

myModule.deleteStudentByClass("L3");

myModule.displayStudents(myModule.students);