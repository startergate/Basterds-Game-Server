import SID from "@startergate/sidts"
import * as Joi from "joi"

const sid = new SID("basterds-game");

export const sessionReceiver = async (ctx : any) => {
    const request = Joi.object().keys({
        id: Joi.string().required(),
        pw: Joi.string().required(),
        clientid: Joi.string()
    });

    const result = Joi.validate(ctx.request.body, request);

    if (!result) {
        ctx.body = {is_succeed: false};
        ctx.status = 400;
        return;
    }

    const clientid = ctx.request.body.clientid ? ctx.request.body.clientid : await sid.createClientID("basterds-game");

    const session = await sid.login(clientid, ctx.request.body.id, ctx.request.body.pw);

    ctx.body = {
        is_succeed: true,
        data: {
            sessid: session.sessid,
            pid: session.pid,
            clientid: clientid
        }
    }
};