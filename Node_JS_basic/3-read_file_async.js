const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');

        if (parts.length !== 4) return;

        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      const fieldKeys = Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      console.log(`Number of students: ${students.length}`);

      for (const field of fieldKeys) {
        const list = fields[field];
        console.log(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
        );
      }

      resolve(); // مهم: بدون string
    });
  });
}

module.exports = countStudents;
