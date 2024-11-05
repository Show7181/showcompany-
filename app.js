const myModule = require('./WooDeLiang_ModuleName.js'); 

myModule.addNewStudent({ id:"1", names: "Halo", classes: "L1" });
myModule.addNewStudent({ id:"2", names: "GG", classes: "L2" });
myModule.addNewStudent({ id:"3", names: "hello", classes: "L3" });
console.log(myModule.students["1"].names);


console.log(myModule.students);
myModule.updateStudentByid("2", { names: "Haloooo"});

console.log(myModule.students["1"].names);

 myModule.deleteStudentByName("Halo");

//  myModule.deleteStudentByClass("L3");
 console.log(myModule.students);
