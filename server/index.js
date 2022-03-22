const express = require('express');
const path = require('path');
const router = require('./routes/routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

const port = 8888;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

