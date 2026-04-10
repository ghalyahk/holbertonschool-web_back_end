const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      const fields = new Map();

      for (const line of students) {
        const parts = line.split(',');

        if (parts.length !== 4) continue;

        const firstname = parts[0].trim();
        const field = parts[3].trim();

        if (!fields.has(field)) {
          fields.set(field, []);
        }

        fields.get(field).push(firstname);
      }

      console.log(`Number of students: ${students.length}`);

      const sortedFields = [...fields.keys()].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of sortedFields) {
        const list = fields.get(field);
        console.log(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
