import { type } from "../../util/util";
export const ActionTypes = {
    TOGGLE_ACTIVITIES_BAR: type("CONTAINER_ACTIVITIES_BAR_TOGGLE"),
    SET_ACTIVITIES_BAR_MODE: type("CONTAINER_ACTIVITIES_BAR_MODE"),
    SET_ACTIVITIES_BAR_COMMENT_ID: type("CONTAINER_ACTIVITIES_BAR_COMMENT_ID"),
    SET_ACTIVITIES_BAR_COMMENT_SECTION: type("CONTAINER_ACTIVITIES_BAR_COMMENT_SECTION")
};
export class ToggleActivitiesBar {
    constructor() {
        this.type = ActionTypes.TOGGLE_ACTIVITIES_BAR;
    }
}
export class SetActivitiesBarMode {
    constructor(mode) {
        this.type = ActionTypes.SET_ACTIVITIES_BAR_MODE;
        this.payload = { mode };
    }
}
export class SetActivitiesBarCommentID {
    constructor(id) {
        this.type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_ID;
        this.payload = { id };
    }
}
export class SetActivitiesBarCommentSection {
    constructor(section) {
        this.type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_SECTION;
        this.payload = { section };
    }
}
//# sourceMappingURL=activities-bar.js.map