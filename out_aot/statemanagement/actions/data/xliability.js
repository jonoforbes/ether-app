import { type } from "../../util/util";
export const ActionTypes = {
    XLIABILITIES_ADD: type("DATA_XLIABILITIES_ADD"),
    XLIABILITIES_REMOVE: type("DATA_XLIABILITIES_REMOVE"),
    XLIABILITIES_UPDATE: type("DATA_XLIABILITIES_UPDATE"),
    XLIABILITIES_SET_ALL: type("DATA_XLIABILITIES_ADD_ALL")
};
export class AddXLiability {
    constructor(xLiability) {
        this.type = ActionTypes.XLIABILITIES_ADD;
        this.payload = { xLiability };
    }
}
export class RemoveXLiability {
    constructor(_id) {
        this.type = ActionTypes.XLIABILITIES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateXLiability {
    constructor(_id, xLiability) {
        this.type = ActionTypes.XLIABILITIES_UPDATE;
        this.payload = { _id, xLiability };
    }
}
export class SetAllXLiabilities {
    constructor(xLiabilities) {
        this.type = ActionTypes.XLIABILITIES_SET_ALL;
        this.payload = { xLiabilities };
    }
}
//# sourceMappingURL=xliability.js.map