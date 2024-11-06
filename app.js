const myModule = require('./WooDeLiang_ModuleName.js'); 
myModule.addTestStudents();


console.log(myModule.students);
myModule.updateStudentByid("2", { names: "Haloooo"});



 myModule.deleteStudentByName("Halo");

myModule.deleteStudentByClass("L3");
 console.log(myModule.students);
