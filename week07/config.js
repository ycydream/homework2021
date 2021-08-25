const config = {
  // MySQL
  mysql: {
    database: 'test',
    username: 'admin',
    password: 'admin',
    port: '3306',
    host: 'localhost'
  },
  redis: {
    url: 'localhost',
    port: 6379,
    password: 'test'
  },
  mongdb: {
    url: 'mongodb://test:test@192.168.47.130:27017',
    db: 'test'
  }
}

module.exports = config