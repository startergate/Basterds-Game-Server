import * as Router from 'koa-router';

import { sessionReceiver } from './auth.controller';

const auth = new Router();

auth.post('session', sessionReceiver);

export default auth;
