import * as Router from 'koa-router';
import auth from './auth';
import v1 from './v1';
import { apiIndex, apiJsonTest } from './api.controller';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/v1', v1.routes());
api.all('/', apiIndex);
api.all('/json', apiJsonTest);

export default api;
