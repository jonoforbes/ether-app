import { type } from "../../util/util";
export const ActionTypes = {
    TOGGLE_NOTIFICATIONS_BAR: type("CONTAINER_NOTIFICATIONS_BAR_TOGGLE")
};
export class ToggleNotificationsBar {
    constructor() {
        this.type = ActionTypes.TOGGLE_NOTIFICATIONS_BAR;
    }
}
//# sourceMappingURL=notifications-bar.js.map