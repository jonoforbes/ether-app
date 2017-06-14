import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { ClientAccount } from "../../../client-accounts/entities/ClientAccount";

export const ActionTypes = {
    CLIENT_ACCOUNTS_ADD: type("DATA_CLIENT_ACCOUNTS_ADD"),
    CLIENT_ACCOUNTS_REMOVE: type("DATA_CLIENT_ACCOUNTS_REMOVE"),
    CLIENT_ACCOUNTS_UPDATE: type("DATA_CLIENT_ACCOUNTS_UPDATE"),
    CLIENT_ACCOUNTS_UPDATE_STATUS: type("DATA_CLIENT_ACCOUNTS_UPDATE_STATUS"),
    CLIENT_ACCOUNTS_SET_ALL: type("DATA_CLIENT_ACCOUNTS_ADD_ALL")
    
}

export class AddClientAccount implements Action {
    type = ActionTypes.CLIENT_ACCOUNTS_ADD;
    payload: {clientAccount: ClientAccount};

    constructor(clientAccount: ClientAccount) {
        this.payload = {clientAccount};
    }
}

export class RemoveClientAccount implements Action {
    type = ActionTypes.CLIENT_ACCOUNTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateClientAccount implements Action {
    type = ActionTypes.CLIENT_ACCOUNTS_UPDATE;
    payload: {_id: string, clientAccount: ClientAccount};

    constructor(_id: string, clientAccount: ClientAccount) {
        this.payload = {_id, clientAccount};
    }
}

export class UpdateStatus implements Action {
    type = ActionTypes.CLIENT_ACCOUNTS_UPDATE_STATUS;
    payload: {_id: string, accountStatus: string};

    constructor(_id: string, accountStatus: string) {
        this.payload = {_id, accountStatus};
    }
}

export class SetAllClientAccounts implements Action {
    type = ActionTypes.CLIENT_ACCOUNTS_SET_ALL;
    payload: {clientAccounts: ClientAccount[]};

    constructor(clientAccounts: ClientAccount[]) {
        this.payload = {clientAccounts};
    }
}

export type Actions = AddClientAccount
 | RemoveClientAccount 
 | UpdateClientAccount 
 | UpdateStatus
 | SetAllClientAccounts;