const { Router, request } = require('express');
const router = Router();
const db = require('../db');


router.get('/all', (req, res) => {
  let sql = 'select * from company';
  db.all(sql, (err, rows) =>{
    if(err){
      res.status(500).json({"error":err.message});
    }
    res.json({
      datos:rows,
    });
  });
});



router.post('/', (req, res) => {
  const {id, name, key} = req.query;
  let sql = 'INSERT INTO company VALUES (?,?,?)';
  db.run(sql, [id,name,key], err =>{
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
  let sql = 'update company set company_name = ? where company_id = ?'
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
  let sql = 'delete from company where company_id = ?'
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
