import { type } from "../../util/util";
export const ActionTypes = {
    TOGGLE_MASTER_BAR: type("CONTAINER_MASTER_BAR_TOGGLE")
};
export class ToggleMasterBar {
    constructor() {
        this.type = ActionTypes.TOGGLE_MASTER_BAR;
    }
}
//# sourceMappingURL=master-bar.js.map