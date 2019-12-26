import { Context } from 'koa';

import { match } from "../../../../models"

export const createMatch = async (ctx: Context) => {
    match.bulkCreate([{
        pid: ctx.request.body.pid

    }])
};
