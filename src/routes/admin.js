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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    "titulo": "estas viendo get",
    "id": id
  });
});

router.post('/', (req, res) => {
  const data = req.body;
  if (data) {
      res.json({"response": "estas viendo post"})
  }
  else {
      res.status(500).json({ "error": "There was an error." });
  }
});

router.put('/:id', (req, res) => {
const id = req.params.id;
res.json({
  "response": 'estas viendo post con un id',
  "id": id
})
});

router.delete('/:id', (req, res) => {
const id = req.params.id;
res.json({
  "response": 'estas viendo delete',
  "id": id
});
})

module.exports = router;
