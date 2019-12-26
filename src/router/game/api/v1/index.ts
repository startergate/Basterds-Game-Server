import * as Router from 'koa-router';

import { createMatch } from "./v1.controller";

const v1 = new Router();

v1.post('/match', createMatch);

export default v1;