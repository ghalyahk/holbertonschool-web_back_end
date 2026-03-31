export default function getStudentsByLocation(students, city) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use filter to return students in the specified city
  return students.filter((student) => student.location === city);
}
