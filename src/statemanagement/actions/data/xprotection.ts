import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { XProtection } from "../../../xprotections/entities/XProtection";

export const ActionTypes = {
    XPROTECTIONS_ADD: type("DATA_XPROTECTIONS_ADD"),
    XPROTECTIONS_REMOVE: type("DATA_XPROTECTIONS_REMOVE"),
    XPROTECTIONS_UPDATE: type("DATA_XPROTECTIONS_UPDATE"),
    XPROTECTIONS_SET_ALL: type("DATA_XPROTECTIONS_ADD_ALL")
}

export class AddXProtection implements Action {
    type = ActionTypes.XPROTECTIONS_ADD;
    payload: {xProtection: XProtection};

    constructor(xProtection: XProtection) {
        this.payload = {xProtection};
    }
}

export class RemoveXProtection implements Action {
    type = ActionTypes.XPROTECTIONS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateXProtection implements Action {
    type = ActionTypes.XPROTECTIONS_UPDATE;
    payload: {_id: string, xProtection: XProtection};

    constructor(_id: string, xProtection: XProtection) {
        this.payload = {_id, xProtection}
    }
}

export class SetAllXProtections implements Action {
    type = ActionTypes.XPROTECTIONS_SET_ALL;
    payload: {xProtections: XProtection[]};

    constructor(xProtections: XProtection[]) {
        this.payload = {xProtections}
    }
}

export type Actions = 
    AddXProtection
    | RemoveXProtection
    | UpdateXProtection
    | SetAllXProtections;