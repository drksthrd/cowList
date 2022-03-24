const db = require('../db');
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('cowList', 'root', 'helloworld');

module.exports = {
  cows: {
    get: (cb) => {
      db.query('SELECT * FROM cows', (err, data) => {
        if (err) {
          console.error(err);
          cb(err, null);
        } else {
          cb(null, data);
        }
      })
    },

    post: ({name, description}) => {
      db.query(`INSERT INTO cows VALUES (null, "${name}", "${description}");`, (err) => {
        if (err) {
          console.error(err);
        }
      })
    }
  }
}


