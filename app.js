const myModule = require('./WooDeLiang_schoolManagement.js'); 

myModule.displayStudents(myModule.students);

myModule.updateStudentByid("2", { names: "Haloooo"});



 myModule.deleteStudentByName("Halo");

myModule.deleteStudentByClass("L3");

myModule.displayStudents(myModule.students);