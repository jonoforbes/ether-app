import { type } from "../../util/util";
export const ActionTypes = {
    SET_AUTHENTICATION: type("DATA_AUTHENTICATION_SET_AUTHENTICATION"),
    CLEAR_AUTHENTICATION: type("DATA_AUTHENTICATION_CLEAR_AUTHENTICATION")
};
export class SetAuthentication {
    constructor(authenticationResult) {
        this.type = ActionTypes.SET_AUTHENTICATION;
        this.payload = { authenticationResult };
    }
}
export class ClearAuthentication {
    constructor() {
        this.type = ActionTypes.CLEAR_AUTHENTICATION;
    }
}
//# sourceMappingURL=autentication.js.map