import { type } from "../../util/util";
export const ActionTypes = {
    XPROTECTIONS_ADD: type("DATA_XPROTECTIONS_ADD"),
    XPROTECTIONS_REMOVE: type("DATA_XPROTECTIONS_REMOVE"),
    XPROTECTIONS_UPDATE: type("DATA_XPROTECTIONS_UPDATE"),
    XPROTECTIONS_SET_ALL: type("DATA_XPROTECTIONS_ADD_ALL")
};
export class AddXProtection {
    constructor(xProtection) {
        this.type = ActionTypes.XPROTECTIONS_ADD;
        this.payload = { xProtection };
    }
}
export class RemoveXProtection {
    constructor(_id) {
        this.type = ActionTypes.XPROTECTIONS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateXProtection {
    constructor(_id, xProtection) {
        this.type = ActionTypes.XPROTECTIONS_UPDATE;
        this.payload = { _id, xProtection };
    }
}
export class SetAllXProtections {
    constructor(xProtections) {
        this.type = ActionTypes.XPROTECTIONS_SET_ALL;
        this.payload = { xProtections };
    }
}
//# sourceMappingURL=xprotection.js.map