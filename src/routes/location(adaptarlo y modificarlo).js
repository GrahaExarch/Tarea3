const { Router } = require('express');
const router = Router();
const db = require('../db');

router.get('/:location_name', (req, res) => {
    const location_name = req.params.location_name
    const sql = 'select * FROM location where location_name = ?';
    db.all(sql, [location_name], (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            datos: rows,
        });
    });
});


router.get('/', async(req, res) => {
    const sql = 'select * FROM location';
    await db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message })
        }
        console.log(rows);
        res.json({
            datos: rows,
        });
    });
});

router.post('/', async(req, res) => {
    const { company_id, location_name, location_country, location_city, location_meta } = req.query;
    const sql = 'INSERT INTO location VALUES (?,?,?,?,?)';
    await db.run(sql, [company_id, location_name, location_country, location_city, location_meta], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'Lugar insertado'
        });
    });
});

router.put('/:id', (req, res) => {
    const company_id = req.params.company_id;
    const location_name = req.query.location_name;
    const sql = 'update company set location_name = ? where company_id = ?'
    console.log(company_id);
    db.run(sql, [location_name, company_id], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'Location updated'
        });
    });
});

router.delete('/', (req, res) => {
    const location_name = req.query.location_name;
    const sql = 'delete from location where location_name = ?'
    db.run(sql, [location_name], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'Lugar eliminado'
        });
    });
});

module.exports = router;
