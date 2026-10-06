"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmails = exports.getFailedStudents = exports.getStudentById = exports.getOnsiteStudents = exports.getAllStudents = void 0;
const student_data_1 = __importDefault(require("./student_data"));
// Functions
const getAllStudents = () => {
    return student_data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnsiteStudents = () => {
    const getStudent = student_data_1.default.filter((studnt) => studnt.isOnsiteAllowed === true);
    // return students.filter((student) => student.isOnsiteAllowed);
    return getStudent;
};
exports.getOnsiteStudents = getOnsiteStudents;
const getStudentById = (rollNo) => {
    return student_data_1.default.find((student) => student.rollNo === rollNo);
};
exports.getStudentById = getStudentById;
const getFailedStudents = () => {
    return student_data_1.default.filter((student) => !student.entryTest.isPassed);
};
exports.getFailedStudents = getFailedStudents;
const getEmails = () => {
    return student_data_1.default.map((student) => student.email);
};
exports.getEmails = getEmails;
