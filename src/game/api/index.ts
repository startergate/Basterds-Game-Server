import * as Router from 'koa-router';
import auth from "./auth";

const api = new Router();

auth.use('/auth', auth.routes());

export default api;