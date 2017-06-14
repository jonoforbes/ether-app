import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { XLiability } from "../../../xliabilities/entities/XLiability";

export const ActionTypes = {
    XLIABILITIES_ADD: type("DATA_XLIABILITIES_ADD"),
    XLIABILITIES_REMOVE: type("DATA_XLIABILITIES_REMOVE"),
    XLIABILITIES_UPDATE: type("DATA_XLIABILITIES_UPDATE"),
    XLIABILITIES_SET_ALL: type("DATA_XLIABILITIES_ADD_ALL")
}

export class AddXLiability implements Action {
    type = ActionTypes.XLIABILITIES_ADD;
    payload: {xLiability: XLiability};

    constructor(xLiability: XLiability) {
        this.payload = {xLiability};
    }
}

export class RemoveXLiability implements Action {
    type = ActionTypes.XLIABILITIES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateXLiability implements Action {
    type = ActionTypes.XLIABILITIES_UPDATE;
    payload: {_id: string, xLiability: XLiability};

    constructor(_id: string, xLiability: XLiability) {
        this.payload = {_id, xLiability}
    }
}

export class SetAllXLiabilities implements Action {
    type = ActionTypes.XLIABILITIES_SET_ALL;
    payload: {xLiabilities: XLiability[]};

    constructor(xLiabilities: XLiability[]) {
        this.payload = {xLiabilities}
    }
}

export type Actions = 
    AddXLiability
    | RemoveXLiability
    | UpdateXLiability
    | SetAllXLiabilities;