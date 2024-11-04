
module.exports = {
    students : {},

    addNewStudent(studentList) {
        id = studentList.id;
        names = studentList.names;
        classes = studentList.classes;
        this.students[id] = {names,classes};
        
    },

    updateStudent(studentId, updatedData) {
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


  
};
