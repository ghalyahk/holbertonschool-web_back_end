const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
        );
      });

      resolve();
    });
  });
}

// /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// /students
app.get('/students', (req, res) => {
  const db = process.argv[2];

  res.write('This is the list of our students\n');

  countStudents(db)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.write(`${err.message}`);
      res.end();
    });
});

app.listen(1245);

module.exports = app;
