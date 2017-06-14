import { type } from "../../util/util";
export const ActionTypes = {
    ACTIVITIES_ADD: type("DATA_ACTIVITIES_ADD"),
    ACTIVITIES_REMOVE: type("DATA_ACTIVITIES_REMOVE"),
    ACTIVITIES_SET_ALL: type("DATA_ACTIVITIES_ADD_ALL")
};
export class AddActivity {
    constructor(activity) {
        this.type = ActionTypes.ACTIVITIES_ADD;
        this.payload = { activity };
    }
}
export class RemoveActivity {
    constructor(_id) {
        this.type = ActionTypes.ACTIVITIES_REMOVE;
        this.payload = { _id };
    }
}
export class SetAllActivities {
    constructor(activities) {
        this.type = ActionTypes.ACTIVITIES_SET_ALL;
        this.payload = { activities };
    }
}
//# sourceMappingURL=activity.js.map