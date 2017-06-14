import { type } from "../../util/util";
export const ActionTypes = {
    ENABLE_BUSY_FLAG: type("CONTAINER_APPLICATION_ENABLE_BUSY_FLAG"),
    DISABLE_BUSY_FLAG: type("CONTAINER_APPLICATION_DISABLE_BUSY_FLAG"),
};
export class EnableBusyFlag {
    constructor() {
        this.type = ActionTypes.ENABLE_BUSY_FLAG;
    }
}
export class DisableBusyFlag {
    constructor() {
        this.type = ActionTypes.DISABLE_BUSY_FLAG;
    }
}
//# sourceMappingURL=application.js.map