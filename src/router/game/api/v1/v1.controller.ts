import {Context} from 'koa';
import * as Joi from 'joi';

import {match, Sequelize} from "../../../../models"

export const createMatch = async (ctx: Context) => {
    const PlayerReady = Joi.object().keys({
        player1: Joi.string().length(32).required(),
        player2: Joi.string().length(32).required(),
        played_as1: Joi.string().valid('insomnia', 'orangefamily', 'overhit', 'meisterboi'),
        played_as2: Joi.string().valid('insomnia', 'orangefamily', 'overhit', 'meisterboi')
    });

    if (Joi.validate(ctx.request.body, PlayerReady)) {
        ctx.body = {
            is_succeed: false
        };
        return;
    }

    const result = await match.create({
        player1: ctx.request.body.player1,
        player2: ctx.request.body.player2,
        played_as1: ctx.request.body.played_as1,
        played_as2: ctx.request.body.played_as2
    });

    ctx.body = {
        is_succeed: true,
        matchid: result.matchid
    };
};


export const stopMatch = async (ctx: Context) => {
    const result = await match.findByPk(ctx.params.matchid);
    let status = 'lose';
    if (!ctx.request.body.won)
        status = 'tie';
    else if (result.player1 === ctx.request.body.won)
        status = 'won';
    const playtime = Date.now() - new Date(result.created_at).getTime();
    ctx.body = await match.update({ status: status, playtime: playtime, terminated_at: Sequelize.fn('NOW') }, { where: { matchid: ctx.params.matchid } })
};
