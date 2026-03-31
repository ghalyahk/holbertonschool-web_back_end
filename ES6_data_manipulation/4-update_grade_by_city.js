export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade for the current student
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      // Return new object with grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
