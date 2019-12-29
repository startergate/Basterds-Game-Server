import * as Router from 'koa-router';

import { createMatch, stopMatch } from "./v1.controller";

const v1 = new Router();

v1.post('/match', createMatch);
v1.delete('/match/:matchid', stopMatch);

export default v1;