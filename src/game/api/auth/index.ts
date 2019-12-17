import * as Router from 'koa-router';
import * as sid from "@startergate/sidjs";
import {sessionReceiver} from "./auth.controller";

const auth = new Router();

auth.post('session', sessionReceiver);

export default auth;