const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const testMySQL = require('./test_mysql');
const testRedis = require('./test_redis');

router.get('/mysql', async (ctx) => {
  ctx.body = await testMySQL.test();
})
router.get('/redis', async (ctx)=>{
  testRedis.testSetString("a", Math.random());
  ctx.body = await testRedis.testGetString("a");
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);