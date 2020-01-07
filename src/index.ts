import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';

import appRouter from './router';
import {Context} from "koa";

const app = new Koa();

// app.use(logger());

const router = new Router();

const port = process.env.PORT || 5000;

app.use(bodyParser());

/*app.use(async (ctx: Context, next: () => Promise<any>) => {
  ctx.header('Access-Control-Allow-Origin', '*');
  ctx.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.header('Access-Control-Max-Age', '3600');
  ctx.header('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
  await next();
});*/

router.use('', appRouter.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Basterds Game Backend Server Started at port ${port}`);
});
