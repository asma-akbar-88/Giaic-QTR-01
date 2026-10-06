import {
    getAllStudents,
    getOnsiteStudents,
    getStudentById,
    getFailedStudents,
    getEmails,
} from "./get_function";

console.log("All Students:", getAllStudents());
console.log("Onsite Students:", getOnsiteStudents());
console.log("Student by Roll No 2003:", getStudentById(2003));
console.log("Failed Students:", getFailedStudents());
console.log("Emails:", getEmails());
