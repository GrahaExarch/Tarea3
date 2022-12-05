const { Router } = require('express');
const router = Router();
const db = require('../db');

router.get('/', (req, res) => {
  res.json(
      {
          "Rutas": [
            "/api/admin",
            "/api/company",
            "/api/location",
            "/api/sensor",
            "/api/v1/sensor_data"]
      }
  );
})

module.exports = router;
