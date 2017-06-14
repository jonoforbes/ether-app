import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { UserData } from "../../../team/entities/UserData";

export const ActionTypes = {
    USER_DATA_ADD: type("DATA_USER_DATA_ADD"),
    USER_DATA_REMOVE: type("DATA_USER_DATA_REMOVE"),
    USER_DATA_UPDATE: type("DATA_USER_DATA_UPDATE"),
    USER_DATA_SET_ALL: type("DATA_USER_DATA_ADD_ALL")
}

export class AddUserData implements Action {
    type = ActionTypes.USER_DATA_ADD;
    payload: {userData: UserData};

    constructor(userData: UserData) {
        this.payload = { userData };
    }
}

export class RemoveUserData implements Action {
    type = ActionTypes.USER_DATA_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = { _id };
    }
}

export class UpdateUserData implements Action {
    type = ActionTypes.USER_DATA_UPDATE;
    payload: {_id: string, userData: UserData};

    constructor(_id: string, userData: UserData) {
        this.payload = {_id, userData};
    }
}

export class SetAllUserData implements Action {
    type = ActionTypes.USER_DATA_SET_ALL;
    payload: {userData: UserData[]};

    constructor(userData: UserData[]) {
        this.payload = { userData };
    }
}

export type Actions = 
    AddUserData
    | RemoveUserData
    | UpdateUserData
    | SetAllUserData;