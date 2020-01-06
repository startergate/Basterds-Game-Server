import { Context } from 'koa';

export const apiIndex = (ctx: Context) => {
    ctx.body = 'BUILD 20200106';
};

export const apiJsonTest = (ctx: Context) => {
    ctx.body = {
        "test": 1
    }
};
