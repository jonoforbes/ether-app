import { type } from "../../util/util";
export const ActionTypes = {
    XASSETS_ADD: type("DATA_XASSETS_ADD"),
    XASSETS_REMOVE: type("DATA_XASSETS_REMOVE"),
    XASSETS_UPDATE: type("DATA_XASSETS_UPDATE"),
    XASSETS_SET_ALL: type("DATA_XASSETS_ADD_ALL")
};
export class AddXAsset {
    constructor(xAsset) {
        this.type = ActionTypes.XASSETS_ADD;
        this.payload = { xAsset };
    }
}
export class RemoveXAsset {
    constructor(_id) {
        this.type = ActionTypes.XASSETS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateXAsset {
    constructor(_id, xAsset) {
        this.type = ActionTypes.XASSETS_UPDATE;
        this.payload = { _id, xAsset };
    }
}
export class SetAllXAssets {
    constructor(xAssets) {
        this.type = ActionTypes.XASSETS_SET_ALL;
        this.payload = { xAssets };
    }
}
//# sourceMappingURL=xasset.js.map