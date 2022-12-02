const { Router} = require('express');
const router = Router();
const db = require('../db');

router.get('/', (req,res)=>{
    
});

router.post('/', (req,res)=>{
    let sql = 'INSERT into'
    res.status(201).json({"test":'test'})
});

module.exports = router;