const express = require('express');
const fs = require('fs');

const app = express();

// function to read students (نفس فكرة السؤال 3)
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const result = [];
      result.push(`Number of students: ${students.length}`);

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
        result.push(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
        );
      });

      resolve(result.join('\n'));
    });
  });
}

// route /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// route /students
app.get('/students', async (req, res) => {
  const db = process.argv[2];

  let response = 'This is the list of our students';

  try {
    const data = await countStudents(db);
    response += `\n${data}`;
  } catch (err) {
    response += `\n${err.message}`;
  }

  res.send(response);
});

app.listen(1245);

module.exports = app;
