const Koa = require('koa');
const app = new Koa();
const testMongodb = require('./test_mongodb');

app.use(async ctx => {
  var myobj = { name: "θιΈζη¨", url: "www.runoob" };
  testMongodb.insertOne("site", myobj);
  ctx.body = await testMongodb.findOne("site");
});

app.listen(3002);