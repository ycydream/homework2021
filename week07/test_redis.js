const redis = require('redis');
const config = require('./config');

var client = redis.createClient(config.redis.port, config.redis.url);

client.on("error", err => {
  console.log('redis connect err', err);
});

client.on('connect', () => {
  console.log('redis connect success');
})
client.auth(config.redis.password);

class TestRedis{
  constructor () {

  }

  testSetString = (key, value) => {
    return new Promise((resolve, reject) => {
      client.set(key, value, function(err, result){
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result);
      })
    })
  }

  testGetString = (key) => {
    return new Promise((resolve, reject) => {
      client.get(key, function (err, result) {
        if (err) {
          console.log(err);
          reject(err)
        }
        resolve(result)
      });
    })
  }
}

module.exports = new TestRedis()