import SID from "@startergate/sidts"
import * as Joi from "joi"


const sid = new SID("basterds-game");

export const sessionReceiver = (ctx : any) => {
    const request = Joi.object().keys({
        id: Joi.string().required(),
        pw: Joi.string().required()
    });

    const result = Joi.validate(ctx.request.body, request);

    if (!result) {
        ctx.body = {is_succeed: false};
        ctx.status = 400;
        return;
    }


    ctx.body = {
        is_succeed: true,
        data: {
            sessid: "some sessid",
            pid: "somepid"
        }
    }
};