import * as Router from 'koa-router';
import auth from "./auth";
import v1 from "./v1"

const api = new Router();

api.use('/auth', auth.routes());
api.use('/v1', v1.routes());

export default api;