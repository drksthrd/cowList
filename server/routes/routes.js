const express = require('express');
const models = require('../models/index.js');

const router = express.Router();

router.get('/cows', (req, res) => {
  models.cows.get((err, data) => {
    if (err) {
      console.error(err);
      res.statusCode(500);
      res.end()
    } else {
      console.log('response: ', data);
      res.json(data);
    }
  });
})

router.post('/cows', (req, res) => {
  console.log('post body: ', req.body);
  models.cows.post(req.body)
  res.end();
})

module.exports = router;