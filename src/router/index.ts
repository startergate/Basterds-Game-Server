import * as Router from "koa-router";

import game from './game';

const router = new Router();

router.use('/api', game.routes());

export default router;