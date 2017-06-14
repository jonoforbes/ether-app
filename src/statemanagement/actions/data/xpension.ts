import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { XPension } from "../../../xpensions/entities/XPension";

export const ActionTypes = {
    XPENSIONS_ADD: type("DATA_XPENSIONS_ADD"),
    XPENSIONS_REMOVE: type("DATA_XPENSIONS_REMOVE"),
    XPENSIONS_UPDATE: type("DATA_XPENSIONS_UPDATE"),
    XPENSIONS_SET_ALL: type("DATA_XPENSIONS_ADD_ALL")
}

export class AddXPension implements Action {
    type = ActionTypes.XPENSIONS_ADD;
    payload: {xPension: XPension};

    constructor(xPension: XPension) {
        this.payload = {xPension};
    }
}

export class RemoveXPension implements Action {
    type = ActionTypes.XPENSIONS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateXPension implements Action {
    type = ActionTypes.XPENSIONS_UPDATE;
    payload: {_id: string, xPension: XPension};

    constructor(_id: string, xPension: XPension) {
        this.payload = {_id, xPension}
    }
}

export class SetAllXPensions implements Action {
    type = ActionTypes.XPENSIONS_SET_ALL;
    payload: {xPensions: XPension[]};

    constructor(xPensions: XPension[]) {
        this.payload = {xPensions}
    }
}

export type Actions = 
    AddXPension
    | RemoveXPension
    | UpdateXPension
    | SetAllXPensions;