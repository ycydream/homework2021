const Koa = require('koa');
const app = new Koa();
const testMySQL = require('./test_mysql');

app.use(async ctx => {
  ctx.body = await testMySQL.test();
});

app.listen(3000);