import { type } from "../../util/util";
import { Action } from "@ngrx/store";
export const ActionTypes = {
    TOGGLE_ACTIVITIES_BAR: type("CONTAINER_ACTIVITIES_BAR_TOGGLE"),
    SET_ACTIVITIES_BAR_MODE: type("CONTAINER_ACTIVITIES_BAR_MODE"),
    SET_ACTIVITIES_BAR_COMMENT_ID: type("CONTAINER_ACTIVITIES_BAR_COMMENT_ID"),
    SET_ACTIVITIES_BAR_COMMENT_SECTION: type("CONTAINER_ACTIVITIES_BAR_COMMENT_SECTION")
}

export class ToggleActivitiesBar implements Action {
    type = ActionTypes.TOGGLE_ACTIVITIES_BAR;
    payload: {};

    public constructor() {}
}

export class SetActivitiesBarMode implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_MODE;
    payload: {mode: String};
    constructor(mode: String) {
        this.payload = { mode };
    }
}

export class SetActivitiesBarCommentID implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_ID;
    payload: {id: String};
    constructor(id: String) {
        this.payload = {id};
    }
}

export class SetActivitiesBarCommentSection implements Action {
    type = ActionTypes.SET_ACTIVITIES_BAR_COMMENT_SECTION;
    payload: {section: String};
    constructor(section: String) {
        this.payload = {section};
    }
}




export type Actions = ToggleActivitiesBar | SetActivitiesBarMode | SetActivitiesBarCommentID | SetActivitiesBarCommentSection;