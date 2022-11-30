const express = require('express');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('./src/database/BD.sqlite',sqlite3.OPEN_READWRITE, (err) =>{
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado a la Base de Datos SQLite3.');
});

const router = express.Router();


router.get('/', (req,res) => {
  let sql = 'SELECT * FROM admin';
  database.serialize(() => {
    database.all(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ "error": err.message });
      }
      res.json({
        texto: 'uwu',
        datos: rows,

      });
    });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    "titulo": "estas viendo get",
    "id": id
  });
});

router.post('/', (req, res) => {
  const data = req.body;
  if (data) {
      res.json({"response": "estas viendo post"})
  }
  else {
      res.status(500).json({ "error": "There was an error." });
  }
});

router.put('/:id', (req, res) => {
const id = req.params.id;
res.json({
  "response": 'estas viendo post con un id',
  "id": id
})
});

router.delete('/:id', (req, res) => {
const id = req.params.id;
res.json({
  "response": 'estas viendo delete',
  "id": id
});
})


module.exports = router;


