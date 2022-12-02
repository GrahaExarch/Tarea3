const { Router, request } = require('express');
const router = Router();
const db = require('../db');


router.get('/:id', (req,res)=>{
  const id = req.params.id;
  const sql = 'select * from company where company_api_key = ?';
  db.all(sql, [id], (err, rows) =>{
    if(err){
      res.status(500).json({"error":err.message});
    }
    res.json({
      datos:rows,
    });
  });
});

router.get('/', async (req, res) => {
  const sql = 'select * from company';
  await db.all(sql, (err, rows) =>{
    if(err){
      res.status(500).json({"error":err.message});
    }
    console.log(rows);
    res.json({
      datos:rows,
    });
  });
});

router.post('/', async (req, res) => {
  const {id, name, key} = req.query;
  const sql = 'INSERT INTO company VALUES (?,?,?)';
  await db.run(sql, [id,name,key], err =>{
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
  const name = req.query.name;
  const sql = 'update company set company_name = ? where company_id = ?'
  console.log(id);
  db.run(sql, [name,id], err =>{
    if(err){
      res.status(500).json({ "error": err.message });
    }
    res.json({
      "response": 'Name updated'
    });
  });
});

router.delete('/', (req, res) => {
  const id = req.query.id;
  const sql = 'delete from company where company_id = ?'
  db.run(sql, [id], err =>{
    if(err){
      res.status(500).json({"error": err.message});
    }
    res.json({
        "response": 'Compañia eliminada'
    });
  });
});

module.exports = router;
