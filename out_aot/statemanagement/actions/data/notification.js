import { type } from "../../util/util";
export const ActionTypes = {
    NOTIFICATIONS_ADD: type("DATA_NOTIFICATIONS_ADD"),
    NOTIFICATIONS_REMOVE: type("DATA_NOTIFICATIONS_REMOVE"),
    NOTIFICATIONS_SET_ALL: type("DATA_NOTIFICATIONS_ADD_ALL")
};
export class AddNotification {
    constructor(notification) {
        this.type = ActionTypes.NOTIFICATIONS_ADD;
        this.payload = { notification };
    }
}
export class RemoveNotification {
    constructor(_id) {
        this.type = ActionTypes.NOTIFICATIONS_REMOVE;
        this.payload = { _id };
    }
}
export class SetAllNotifications {
    constructor(notifications) {
        this.type = ActionTypes.NOTIFICATIONS_SET_ALL;
        this.payload = { notifications };
    }
}
//# sourceMappingURL=notification.js.map