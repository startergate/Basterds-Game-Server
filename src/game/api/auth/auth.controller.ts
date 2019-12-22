import SID from "@startergate/sidts"
import * as Joi from "joi"


const sid = new SID("basterds-game");

export const sessionReceiver = (ctx : any) => {

    ctx.body = {
        is_succeed: true,
        data: {
            sessid: "some sessid",
            pid: "somepid"
        }
    }
};