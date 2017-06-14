import { type } from "../../util/util";
export const ActionTypes = {
    CLIENT_ACCOUNTS_ADD: type("DATA_CLIENT_ACCOUNTS_ADD"),
    CLIENT_ACCOUNTS_REMOVE: type("DATA_CLIENT_ACCOUNTS_REMOVE"),
    CLIENT_ACCOUNTS_UPDATE: type("DATA_CLIENT_ACCOUNTS_UPDATE"),
    CLIENT_ACCOUNTS_UPDATE_STATUS: type("DATA_CLIENT_ACCOUNTS_UPDATE_STATUS"),
    CLIENT_ACCOUNTS_SET_ALL: type("DATA_CLIENT_ACCOUNTS_ADD_ALL")
};
export class AddClientAccount {
    constructor(clientAccount) {
        this.type = ActionTypes.CLIENT_ACCOUNTS_ADD;
        this.payload = { clientAccount };
    }
}
export class RemoveClientAccount {
    constructor(_id) {
        this.type = ActionTypes.CLIENT_ACCOUNTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateClientAccount {
    constructor(_id, clientAccount) {
        this.type = ActionTypes.CLIENT_ACCOUNTS_UPDATE;
        this.payload = { _id, clientAccount };
    }
}
export class UpdateStatus {
    constructor(_id, accountStatus) {
        this.type = ActionTypes.CLIENT_ACCOUNTS_UPDATE_STATUS;
        this.payload = { _id, accountStatus };
    }
}
export class SetAllClientAccounts {
    constructor(clientAccounts) {
        this.type = ActionTypes.CLIENT_ACCOUNTS_SET_ALL;
        this.payload = { clientAccounts };
    }
}
//# sourceMappingURL=client-account.js.map