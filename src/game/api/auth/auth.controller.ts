import SID from "@startergate/sidts"
import * as Joi from "joi"


const sid = new SID("basterds-game");

export const sessionReceiver = (ctx : any) => {

    ctx.body = {
        sessid: "some sessid",
        pid: "somepid"
    }
};