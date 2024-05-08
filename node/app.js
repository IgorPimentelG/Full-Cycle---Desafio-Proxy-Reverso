const express = require('express');
const { faker } = require('@faker-js/faker');
const { connection } = require('./db');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  connection.query(`INSERT INTO people(name) VALUES('${faker.person.firstName()}')`);
  connection.query(`SELECT name FROM people`, (_, result) => {
    const names = result.map(element => element.name);
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});