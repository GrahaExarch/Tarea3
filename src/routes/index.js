const { Router } = require('express');
const router = Router();
const db = require('../db');

router.get('/', (req, res) => {
  res.json(
      {
          "Rutas": "/api/admin \n /api/company \n /api/location \n /api/sensor \n /api/v1/sensor_data"
      }
  );
})

module.exports = router;
