const { Router} = require('express');
const router = Router();
const db = require('../db');

router.get('/', async (req, res) => {
    const {company_api_key, from, to, sensor_id} = req.query
    const sql = 'select * from sensor_data where time > ? and time < ?';
    await db.all(sql, [from,to],(err, rows) =>{
      if(err){
        res.status(500).json({"error":err.message});
      }
      console.log(rows);
      res.json({
        datos:rows,
      });
    });
  });

router.post('/', async (req,res)=>{
    const date = Date.now();
    const {metrica1,metrica2,sensor_id,metric_description,key} = req.query;
    let sql = 'INSERT into sensor_data values(?,?,?,?,?,?)'
    let sql2 = 'Select * from sensor where sensor_api_key = ?'
    await db.all(sql2, [key], (err,rows) =>{
        console.log(rows[0]);
        if(rows[0]){
            db.run(sql, [metrica1,metrica2,sensor_id,metric_description,date,key], err =>{
                if(err){
                    res.status(500).json({"error":err.message});
                }
                res.json({
                    "response":'Dato insertado'
                })
            });
        }
        else{
            res.status(400).json({"error":'Sensor inexistente'})
        };
    });
});


module.exports = router;
