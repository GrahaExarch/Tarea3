const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  const nombre = "javier";
  const apellido = "ramos";

  res.json({
    name: nombre,
    lastname: apellido
  });
});

module.exports = router;
