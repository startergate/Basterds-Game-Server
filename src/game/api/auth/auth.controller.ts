export const sessionReceiver = (ctx : any) => {
    ctx.body = {
        sessid: "some sessid",
        pid: "somepid"
    }
};