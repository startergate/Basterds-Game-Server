import { Context } from 'koa';

export const apiIndex = (ctx: Context) => {
    ctx.body = 'BUILD 20200106';
};