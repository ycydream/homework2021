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
  }
}

module.exports = config