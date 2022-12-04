const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/', async(req, res) => {
    const sql = 'SELECT * FROM admin';
    await db.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        console.log(rows);
        res.json({
            datos: rows,
        });
    });
});



router.get('/:Username', (req, res) => {
    const Username = req.params.Username;
    const sql = 'SELECT * FROM admin WHERE username = ?';
    db.all(sql, [Username], (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            datos: rows,
        });
    });
});

router.post('/', async(req, res) => {
    const { Username, Password } = req.query;
    const sql = 'INSERT INTO admin VALUES (?,?)';
    await db.run(sql, [Username, Password], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'Usuario insertado'
        });
    });
});


router.put('/:Username', (req, res) => {
    const Username = req.params.Username;
    const Password = req.query.Password;
    const sql = 'update admin set Username = ? where Password = ?'
    console.log(Username);
    db.run(sql, [Username, Password], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'User updated'
        });
    });
});



router.delete('/', (req, res) => {
    const Username = req.query.Username;
    const sql = 'delete from admin where Username = ?'
    db.run(sql, [Username], err => {
        if (err) {
            res.status(500).json({ "error": err.message });
        }
        res.json({
            "response": 'Usuario eliminado'
        });
    });
});


module.exports = router;