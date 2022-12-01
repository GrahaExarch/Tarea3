const { Router } = require('express');
const router = Router();
const db = require('../db');

router.get('/', (req, res) => {
  res.json(
      {
          "Title": "Hola mundo usando rutas!"
      }
  );
})

module.exports = router;
