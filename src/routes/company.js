const { Router, request } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({"titulo": "estas viendo  get"});
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
});

module.exports = router;
