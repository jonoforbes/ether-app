import { type } from "../../util/util";
export const ActionTypes = {
    ACTIVATE_ROUTE: type("CONTAINER_ACTIVATE_ROUTE"),
};
export class ActivateRoute {
    constructor(moduleName) {
        this.type = ActionTypes.ACTIVATE_ROUTE;
        this.payload = { moduleName };
    }
}
//# sourceMappingURL=active-module.js.map