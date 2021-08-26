const Koa = require('koa');
const app = new Koa();
const testElaticeSearch = require('./test_elasticesearch');

app.use(async ctx => {
  ctx.body = await testElaticeSearch.search();
});

app.listen(3003);