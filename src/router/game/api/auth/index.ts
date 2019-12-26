import * as Router from 'koa-router';
import SID from '@startergate/sidts'

import {sessionReceiver} from "./auth.controller";

const auth = new Router();


const sid = new SID('basterds_game');
auth.post('session', sessionReceiver);

export default auth;