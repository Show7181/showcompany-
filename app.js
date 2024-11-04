const myModule = require('./WooDeLiang_ModuleName.js'); 

myModule.addNewStudent({ id:"1", names: "Halo", classes: "L1" });
myModule.addNewStudent({ id:"2", names: "GG", classes: "L2" });

console.log(myModule.students["1"].names);

myModule.updateStudent("1", { names: "Haloooo"});
console.log(myModule.students["1"].names);
 myModule.deleteStudent("1");

 console.log(myModule.students);
