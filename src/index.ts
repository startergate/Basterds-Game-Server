import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

import appRouter from './router';

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 5000;

app.use(bodyParser());
router.use('', appRouter.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Basterds Game Backend Server Started at port ${port}`);
});