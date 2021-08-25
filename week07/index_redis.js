const Koa = require('koa');
const app = new Koa();
const testRedis = require('./test_redis');

app.use(async ctx => {
  testRedis.testSetString("a", Math.random());
  ctx.body = await testRedis.testGetString("a");
});
app.listen(3001);