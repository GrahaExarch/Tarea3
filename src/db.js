const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./src/database/BD.sqlite',sqlite3.OPEN_READWRITE, (err) =>{
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado a la Base de Datos SQLite3.');
});

module.exports = db;