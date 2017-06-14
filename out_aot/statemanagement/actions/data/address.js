import { type } from "../../util/util";
export const ActionTypes = {
    ADDRESSES_ADD: type("DATA_ADDRESSES_ADD"),
    ADDRESSES_REMOVE: type("DATA_ADDRESSES_REMOVE"),
    ADDRESSES_UPDATE: type("DATA_ADDRESSES_UPDATE"),
    ADDRESSES_SET_ALL: type("DATA_ADDRESSES_ADD_ALL")
};
export class AddAddress {
    constructor(address) {
        this.type = ActionTypes.ADDRESSES_ADD;
        this.payload = { address };
    }
}
export class RemoveAddress {
    constructor(_id) {
        this.type = ActionTypes.ADDRESSES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateAddress {
    constructor(_id, address) {
        this.type = ActionTypes.ADDRESSES_UPDATE;
        this.payload = { _id, address };
    }
}
export class SetAllAddresses {
    constructor(addresses) {
        this.type = ActionTypes.ADDRESSES_SET_ALL;
        this.payload = { addresses };
    }
}
//# sourceMappingURL=address.js.map