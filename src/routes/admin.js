const { Router, request } = require('express');
const db = require('../db');
const router = Router();
const { v4: uuidv4 } = require('uuid');


router.get('/', async (req,res) => {
  let sql = 'SELECT * FROM admin';
  db.serialize(() => {
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ "error": err.message });
      }
      res.json({
        datos: rows,
      });
    });
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let sql = 'select * from admin where username = ?';
  db.all(sql, [id], (err, rows)=>{
    if(err) {
      res.status(500).json({"error":err.message});
    }
    res.json({
        datos: rows,
    });
  });
});

router.post('/create_company', async (req, res) => {
  const {id, company_name} = req.body;
  const key = uuidv4();
  const sql = 'INSERT INTO company VALUES (?,?,?)';
  await db.run(sql, [id, company_name, key], err =>{
    if(err){
      res.status(500).json({ "error": err.message });
    }
    res.json({
      "response": 'Insertada compañia'
    });
  });
});

router.put('/:id', (req, res) => {
const id = req.params.id;
res.json({
  "response": 'estas viendo post con un id',
  "id": id
})
});




module.exports = router;


