import { type } from "../../util/util";
export const ActionTypes = {
    TOGGLE_SIDEBAR: type("CONTAINER_COLLAPSABLESIDEBAR_TOGGLE")
};
export class ToggleSidebar {
    constructor() {
        this.type = ActionTypes.TOGGLE_SIDEBAR;
    }
}
//# sourceMappingURL=sidebar.js.map