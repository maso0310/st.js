const koa = require('koa');
const app = new koa();

const router = require('koa-router');
router.post('/webhooks', function *(ctx, next) {
  // 取 User 傳送得資料
  ctx.req.body
})
app
  .use(router())
  // 自訂 middleware
  .use(function *(ctx, next){
    this.status = 200;
  });