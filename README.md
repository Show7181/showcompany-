# Assignment 1
Woo De Liang 
You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 


This a Node.js module to manage students
These 5 functions are

-addNewStudent is for Adds a new student to the list (parameters is studentlist),(object containing id, names, and classes of the new student)

-updateStudentByid is update an existing student information by their ID (parameters is studentId),(updatedData become an object containing names or classes to update)

-deleteStudent is delete a student by their ID ( Parameters is studentId)

-deleteStudentByName is delete students with a specific student name ( Parameters is StudentName)

-deleteStudentByClass is delete whole class ()

-displayStudents is displays all students in the system


This is how to test the app

const myModule = require('./WooDeLiang_schoolManagement.js'); 

myModule.addNewStudent({ id: "4", names: "Sara", classes: "L3" });
myModule.addNewStudent({ id: "5", names: "Zack", classes: "L4" });
(you can add above code to add student although i already have pre-defined student in the system)


myModule.displayStudents(myModule.students);
(above code is for display all the student and check)


myModule.updateStudentByid("2", { names: "jonathan"});
(above code is updating student names)

myModule.deleteStudent("1")
(above code is for delete the student by their id)

 myModule.deleteStudentByName("Alex");
(above code is delete the student name call alex )

 myModule.deleteStudentByClass("L3");
 (above code is deleting all the student by L3 class)

 myModule.displayStudents(myModule.students);
 (lastly can use the display function to see the changed )