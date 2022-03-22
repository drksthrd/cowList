const express = require('express');

const router = express.Router();

router.get('/cows', (req, res) => {
  res.json([{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}])
})

module.exports = router;