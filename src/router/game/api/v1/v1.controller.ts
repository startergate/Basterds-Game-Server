import {Context} from 'koa';
import * as Joi from 'joi';

import { match, object, Sequelize } from '../../../../models';

export const createMatch = async (ctx: Context) => {
    const PlayerReady = Joi.object().keys({
        player: Joi.string().length(32).required(),
        played_as: Joi.string().valid('insomnia', 'orangefamily', 'overhit', 'meisterboi'),
    });

    if (Joi.validate(ctx.request.body, PlayerReady).error) {
        ctx.body = {
            is_succeed: false
        };
        return;
    }

    const result = await match.create({
        player: ctx.request.body.player,
        played_as: ctx.request.body.played_as
    });

    ctx.body = {
        is_succeed: true,
        matchid: result.matchid
    };
};


export const stopMatch = async (ctx: Context) => {
    const PlayerOkay = Joi.object().keys({
        won: Joi.string().max(32).required()
    });

    console.log(ctx.request.body);

    if (Joi.validate(ctx.request.body, PlayerOkay).error) {
        ctx.body = {
            is_succeed: false
        };
        return;
    }

    const result = await match.findByPk(ctx.params.matchid);

    if (!result) return ctx.status = 400;

    let status = 'lose';

    if (!ctx.request.body.won)
        status = 'tie';
    else if (result.player === ctx.request.body.won)
        status = 'won';

    const playtime = Date.now() - new Date(result.created_at).getTime();

    console.log(playtime);

    await match.update({ status: status, playtime: playtime, terminated_at: Sequelize.fn('NOW') },
        { where: { matchid: ctx.params.matchid } });

    ctx.body = {
        is_succeed: true,
        matchid: ctx.params.matchid
    };
};

export const spawnObject = async (ctx: Context) => {
    const PlayerReady = Joi.object().keys({
        belong_to: Joi.string().length(32).required(),
        job: Joi.string().valid('leader', 'basic', 'advanced', 'expert'),
    });

    if (Joi.validate(ctx.request.body, PlayerReady).error) {
        ctx.body = {
            is_succeed: false
        };
        return;
    }

    const matchObject = await match.findByPk(ctx.params.matchid);

    let faction = matchObject.played_as;

    const promise1 = object.create({
        matchid: ctx.params.matchid,
        belong_to: ctx.request.body.belong_to,
        status: "alive",
        faction: faction,
        job: ctx.request.body.job
    });

    const promise2 = match.update({
        spawned: Sequelize.literal('spawned + 1')
    }, {
        where: { matchid: ctx.params.matchid }
    });

    ctx.body = {
        is_succeed: true,
        raw: await Promise.all([promise1, promise2])
    };
};

export const killObject = async (ctx: Context) => {
    const result = await match.update({
        killed: Sequelize.literal('killed + 1')
    }, {
        where: { matchid: ctx.params.matchid }
    });
    ctx.body = { is_succeed: true, raw: result };
};

export const attackObject = async (ctx: Context) => {
    const result = await match.update({
        damage: Sequelize.literal(`damage + ${ctx.request.body.damage}`)
    }, {
        where: { matchid: ctx.params.matchid }
    });
    ctx.body = { is_succeed: true, raw: result };
};
