import * as Router from 'koa-router';

import {createMatch, killObject, spawnObject, stopMatch} from "./v1.controller";

const v1 = new Router();

v1.post('/match', createMatch);
v1.delete('/match/:matchid', stopMatch);
v1.post('/match/:matchid/spawn', spawnObject);

export default v1;