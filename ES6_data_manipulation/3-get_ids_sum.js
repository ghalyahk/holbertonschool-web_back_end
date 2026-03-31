export default function getStudentIdsSum(students) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use reduce to sum all student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
