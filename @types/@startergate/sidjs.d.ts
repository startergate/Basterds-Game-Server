declare module '@startergate/sidjs' {
    global {
        interface SID {
            constructor(clientName:string): never;
            login(clientid:string, id:string, pw:string): Promise<object>;
            loginAuth(clientid:string, sessid:string): Promise<object>;
        }
    }

}