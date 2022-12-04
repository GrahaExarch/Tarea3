const { Router} = require('express');
const router = Router();
const db = require('../db');
const { v4: uuidv4} = require('uuid');

router.get('/', async (req, res) => {
  const sql = 'select * from sensor';
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

router.get('/:id', (req,res)=>{
  const id = req.params.id;
  const sql = 'select * from sensor where sensor_id = ?';
  db.all(sql, [id], (err, rows) =>{
    if(err){
      res.status(500).json({"error":err.message});
    }
    res.json({
      datos:rows,
    });
  });
});

router.post('/', async (req, res) => {
  const {l_id, s_id, name, category, meta} = req.query;
  let sql = 'insert into sensor values (?,?,?,?,?,?)';
  const key =   uuidv4();
  await db.run(sql,[l_id,s_id,name,category,meta,key],err =>{
    if(err){
      res.status(500).json({"error":err.message});
    }
    res.json({
      "response":'Sensor creado',
      "key":key
    });
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const {l_id, name, category, meta} = req.query;
  const sql = 'update sensor set location_id = ?, sensor_name = ?, sensor_category = ?, sensor_meta = ? where sensor_id = ?'
  console.log(id);
  db.run(sql, [l_id,name,category,meta,id], err =>{
    if(err){
      res.status(500).json({ "error": err.message });
    }
    res.json({
      "response": 'Sensor updated'
    });
  });
});

router.delete('/', (req, res) => {
  const id = req.query.id;
  const sql = 'delete from sensor where sensor_id = ?'
  db.run(sql, [id], err =>{
    if(err){
      res.status(500).json({"error": err.message});
    }
    res.json({
        "response": 'Sensor eliminado'
    });
  });
});

module.exports = router;
