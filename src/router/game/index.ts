import * as Router from 'koa-router';

import api from './api';

const game = new Router();

game.use('/api', api.routes());

export default game;
