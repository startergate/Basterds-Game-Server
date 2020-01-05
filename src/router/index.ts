import * as Router from 'koa-router';

import game from './game';

const router = new Router();

router.use('/game', game.routes());

export default router;
