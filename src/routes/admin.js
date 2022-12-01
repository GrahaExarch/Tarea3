const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/', (req,res) => {
  let sql = 'SELECT * FROM admin';
  db.serialize(() => {
    db.all(sql, (err, rows) => {
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
  let sql = 'select * FROM admin WHERE Username = ?'
  db.serialize(()=>{
    db.all(sql, [id], (err, rows)=>{
      if(err) {
        res.status(500).json({"error":err.message});
      }
      res.json({
          texto: "estas viendo get",
          datos: rows,
      });
    });
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


