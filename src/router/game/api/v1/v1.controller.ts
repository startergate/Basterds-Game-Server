import {Context} from 'koa';
import * as Joi from 'joi';

import {match, Sequelize} from "../../../../models"

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
    const result = await match.findByPk(ctx.params.matchid);
    if (!result) return ctx.status = 400;
    let status = 'lose';
    if (!ctx.request.body.won)
        status = 'tie';
    else if (result.player === ctx.request.body.won)
        status = 'won';
    const playtime = Date.now() - new Date(result.created_at).getTime();
    await match.update({ status: status, playtime: playtime, terminated_at: Sequelize.fn('NOW') }, { where: { matchid: ctx.params.matchid } })
    ctx.body = {
        is_succeed: true,
        matchid: ctx.params.matchid
    }
};
