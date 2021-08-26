const config = require('./config');

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: config.elsticsearch.host,
  log: 'trace',
  apiVersion: config.elsticsearch.apiVersion, // use the same version of your Elasticsearch instance
});

class TestElaticeSearch{
  constructor () {

  }
  search = () => {
    return new Promise((resolve, reject) => {
      const response = client.search({
        q: 'pants'
      }, function(error, response){
        if (error) throw error;
        resolve(response.hits.hits);
      });
    })
  }
}

module.exports = new TestElaticeSearch();



