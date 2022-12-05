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

router.get('/:username', async (req, res) => {
  const username = req.params.username;
  let sql = 'select * from admin where username = ?';
  await db.all(sql, [username], (err, rows)=>{
    if(err) {
      res.status(500).json({"error":err.message});
    }
    res.json({
        datos: rows,
    });
  });
});

router.post('/', async(req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO admin VALUES (?,?)';
  await db.run(sql, [username, password], err => {
      if (err) {
          res.status(500).json({ "error": err.message });
      }
      res.json({
          "response": 'Usuario insertado'
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

router.post('/create_location', async (req, res) => {
  const {id, location_name, location_country, location_city, location_meta} = req.body;
  const sql = 'INSERT INTO location VALUES (?,?,?,?,?)';
  await db.run(sql, [id, location_name, location_country, location_city, location_meta], err =>{
    if(err){
      res.status(500).json({ "error": err.message });
    }
    res.json({
      "response": 'Insertada ubicacion'
    });
  });
});

router.post('/create_sensor', async (req, res) => {
  const {location_id, sensor_id, sensor_name,sensor_category, sensor_meta} = req.body;
  const key = uuidv4();
  const sql = 'INSERT INTO sensor VALUES (?,?,?,?,?,?)';
  await db.run(sql, [location_id, sensor_id, sensor_name,sensor_category, sensor_meta, key], err =>{
    if(err){
      res.status(500).json({ "error": err.message });
    }
    res.json({
      "response": 'Insertado sensor'
    });
  });
});

router.put('/:username', async (req, res) => {
  const username = req.params.username;
  const new_username = req.body.username;
  const password = req.body.password;
  const sql = 'update admin set username = ?, password = ? where username = ?'
  await db.run(sql, [new_username, password, username], err => {
      if (err) {
          res.status(500).json({ "error": err.message });
      }
      res.json({
          "response": 'User updated'
      });
  });
});

router.delete('/:username', async (req, res) => {
  const username = req.params.username;
  const password = req.body.password;
  const sql = 'delete from admin where username = ? and password = ?'
  console.log(username,password)
  await db.run(sql, [username,password], err => {
      if (err) {
          res.status(500).json({ "error": err.message });
      }
      res.json({
          "response": 'Usuario eliminado'
      });
  });
});


module.exports = router;


