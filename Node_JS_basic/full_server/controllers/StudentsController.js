import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((data) => {
        let message = 'This is the list of our students';

        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field) => {
          const list = data[field];
          message += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        });

        res.status(200).send(message);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbFile)
      .then((data) => {
        const list = data[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
