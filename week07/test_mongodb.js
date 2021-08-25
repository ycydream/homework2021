const config = require('./config');

var MongoClient = require('mongodb').MongoClient;

class TestMongodb {
  constructor () {
    this.dbClient = "";
  }

  connect = () => {
    return new Promise((resolve, reject) => {
      if (!this.dbClient) {
        MongoClient.connect(config.mongdb.url, (err, client) => {
          if (err) {
            reject(err);
          } else {
            this.dbClient = client.db(config.mongdb.db);
            resolve(this.dbClient);
          }
        });
      } else {
        // 第二次之后直接返回dbClient
        resolve(this.dbClient);
      }
    });
  }

  insertOne = (collectionName, json) => {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).insertOne(json, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
  }

  findOne = (collectionName) => {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let result = db.collection(collectionName).findOne();
        resolve(result);
      });
    });
  }
}

module.exports = new TestMongodb();