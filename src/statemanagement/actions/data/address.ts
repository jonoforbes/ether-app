import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Address } from "../../../addresses/entities/Address";

export const ActionTypes = {
    ADDRESSES_ADD: type("DATA_ADDRESSES_ADD"),
    ADDRESSES_REMOVE: type("DATA_ADDRESSES_REMOVE"),
    ADDRESSES_UPDATE: type("DATA_ADDRESSES_UPDATE"),
    ADDRESSES_SET_ALL: type("DATA_ADDRESSES_ADD_ALL")
}

export class AddAddress implements Action {
    type = ActionTypes.ADDRESSES_ADD;
    payload: {address: Address};

    constructor(address: Address) {
        this.payload = { address };
    }
}

export class RemoveAddress implements Action {
    type = ActionTypes.ADDRESSES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload ={ _id };
    }
}

export class UpdateAddress implements Action {
    type = ActionTypes.ADDRESSES_UPDATE;
    payload: {_id: string, address: Address};

    constructor(_id: string, address: Address) {
        this.payload = {_id, address};
    }
}

export class SetAllAddresses implements Action {
    type = ActionTypes.ADDRESSES_SET_ALL;
    payload: {addresses: Address[]};

    constructor(addresses: Address[]) {
        this.payload = { addresses };
    }
}

export type Actions = AddAddress | RemoveAddress | UpdateAddress | SetAllAddresses;