import students from "./student_data";


// Functions
export const getAllStudents = () => {
    return students;
};

export const getOnsiteStudents = ()=> { 
    const getStudent = students.filter((studnt)=> studnt.isOnsiteAllowed === true )
    // return students.filter((student) => student.isOnsiteAllowed);
    return getStudent
};

export const getStudentById = (rollNo: number)=> {
    return students.find((student) => student.rollNo === rollNo);
};

export const getFailedStudents = ()=> {
    return students.filter((student) => !student.entryTest.isPassed);
};

export const getEmails = ()=> {
    return students.map((student) => student.email);
};
