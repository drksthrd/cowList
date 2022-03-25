const express = require('express');
const models = require('../models/index.js');

const router = express.Router();

router.get('/cows', (req, res) => {
  models.cows.get((err, data) => {
    if (err) {
      console.error(err);
      res.statusCode(500);
      res.send('Server Error');
    } else {
      res.json(data);
    }
  });
})

router.post('/cows', (req, res) => {
  models.cows.post(req.body, (err) => {
    if (err) {
      res.statusCode(500);
      res.send('Server Error');
    } else {
      res.end();
    }
  })
})

module.exports = router;