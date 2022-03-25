import axios from 'axios';

const apiMethods = {

  getCows: (cb) => {
    axios('/api/cows')
    .then(result => {
      cb(null, result);
    })
    .catch(err => {
      cb(err, null);
    })
  },

  addCow: (name, description, cb) => {
    axios({
      url: '/api/cows',
      method: 'post',
      data: {
        name,
        description
      }
    })
    .then(result => {
      cb(null, result);
    })
    .catch(err => {
      cb(err, null);
    })
  }
}

export default apiMethods;