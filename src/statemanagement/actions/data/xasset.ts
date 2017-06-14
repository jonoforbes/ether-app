import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { XAsset } from "../../../xassets/entities/XAsset";

export const ActionTypes = {
    XASSETS_ADD: type("DATA_XASSETS_ADD"),
    XASSETS_REMOVE: type("DATA_XASSETS_REMOVE"),
    XASSETS_UPDATE: type("DATA_XASSETS_UPDATE"),
    XASSETS_SET_ALL: type("DATA_XASSETS_ADD_ALL")
}

export class AddXAsset implements Action {
    type = ActionTypes.XASSETS_ADD;
    payload: {xAsset: XAsset};

    constructor(xAsset: XAsset) {
        this.payload = {xAsset};
    }
}

export class RemoveXAsset implements Action {
    type = ActionTypes.XASSETS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateXAsset implements Action {
    type = ActionTypes.XASSETS_UPDATE;
    payload: {_id: string, xAsset: XAsset};

    constructor(_id: string, xAsset: XAsset) {
        this.payload = {_id, xAsset}
    }
}

export class SetAllXAssets implements Action {
    type = ActionTypes.XASSETS_SET_ALL;
    payload: {xAssets: XAsset[]};

    constructor(xAssets: XAsset[]) {
        this.payload = {xAssets}
    }
}

export type Actions = 
    AddXAsset
    | RemoveXAsset
    | UpdateXAsset
    | SetAllXAssets;