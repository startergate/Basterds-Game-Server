declare module '@startergate/sidjs' {
    global {
        interface SID {
            constructor(clientName:string): null;
            login(clientid:string, id:string, pw:string): Promise<object>;
            loginAuth(clientid:string, sessid:string): Promise<object> | null;
            logout(clientid:string, sessid:string): Promise<object> | null;
            register(clientid:string, userid:string, pw:string, nickname:string | null): Promise<string|Error>;
            getUserNickname(clientid:string, sessid:string): Promise<string|Error>;
            loginCheck(target:any): never;
            passwordCheck(clientid:string, sessid:string, pw:string): Promise<boolean|Error>;
            createClientID(devicedata:string): Promise<string>;
            setClientName(clientName:string): null;
            getClientName(): string;
        }
    }

}