
module.exports = {
    students : {},
    

    addNewStudent(studentList) {
        id = studentList.id;
        names = studentList.names;
        classes = studentList.classes;
        this.students[id] = {names,classes};
        
    },

    updateStudentByid(studentId, updatedData) {
        if (this.students[studentId]) {
            if (updatedData.names) {
                this.students[studentId].names = updatedData.names;
            }
            if (updatedData.classes) {
                this.students[studentId].classes = updatedData.classes;
            }
            
        } 
    },
  
    deleteStudent(studentId) {
        if (this.students[studentId]) {
            delete this.students[studentId];
            
        } 
    },

    deleteStudentByName(studentName) {
        for ( student in this.students) {
            if (this.students[student].names == studentName) {
                delete this.students[student];
            
               
            }
        }
    },

    deleteStudentByClass(studentclass) {
        for ( student in this.students) {
            if (this.students[student].classes == studentclass) {
                delete this.students[student];
            
               
            }
        }
    },

    addTestStudents() {
        this.addNewStudent({ id: "1", names: "Halo", classes: "L1" });
        this.addNewStudent({ id: "2", names: "gg", classes: "L2" });
        this.addNewStudent({ id: "3", names: "halo", classes: "L3" });
    }
  
};
