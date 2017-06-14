import { type } from "../../util/util";
export const ActionTypes = {
    XPENSIONS_ADD: type("DATA_XPENSIONS_ADD"),
    XPENSIONS_REMOVE: type("DATA_XPENSIONS_REMOVE"),
    XPENSIONS_UPDATE: type("DATA_XPENSIONS_UPDATE"),
    XPENSIONS_SET_ALL: type("DATA_XPENSIONS_ADD_ALL")
};
export class AddXPension {
    constructor(xPension) {
        this.type = ActionTypes.XPENSIONS_ADD;
        this.payload = { xPension };
    }
}
export class RemoveXPension {
    constructor(_id) {
        this.type = ActionTypes.XPENSIONS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateXPension {
    constructor(_id, xPension) {
        this.type = ActionTypes.XPENSIONS_UPDATE;
        this.payload = { _id, xPension };
    }
}
export class SetAllXPensions {
    constructor(xPensions) {
        this.type = ActionTypes.XPENSIONS_SET_ALL;
        this.payload = { xPensions };
    }
}
//# sourceMappingURL=xpension.js.map